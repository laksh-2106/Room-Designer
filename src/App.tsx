import { useState } from 'react';
import { Scene } from './components/Scene';
import { StyleSelector } from './components/StyleSelector';
import { Controls } from './components/Controls';
import { SuggestionsPanel } from './components/SuggestionsPanel';
import type { FurnitureItem, StylePreference, AISuggestion, FurnitureType } from './types';
import { generateAISuggestions } from './utils/aiSuggestions';
import { supabase } from './lib/supabase';

function App() {
  const [wallColor, setWallColor] = useState('#FFFFFF');
  const [furniture, setFurniture] = useState<FurnitureItem[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<StylePreference>('modern');
  const [selectedFurnitureId, setSelectedFurnitureId] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [notification, setNotification] = useState<string>('');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleGenerateSuggestions = () => {
    const newSuggestions = generateAISuggestions(selectedStyle);
    setSuggestions(newSuggestions);
    setShowSuggestions(true);
    showNotification('AI suggestions generated!');
  };

  const handleApplySuggestion = (suggestion: AISuggestion) => {
    setWallColor(suggestion.wallColor);
    setFurniture(suggestion.furnitureItems);
    setShowSuggestions(false);
    showNotification('Design applied successfully!');
  };

  const handleAddFurniture = (type: FurnitureType) => {
    const newItem: FurnitureItem = {
      id: `${type}-${Date.now()}`,
      type,
      position: [
        Math.random() * 4 - 2,
        0,
        Math.random() * 4 - 2,
      ],
      rotation: Math.random() * Math.PI * 2,
      color: '#666666',
    };
    setFurniture([...furniture, newItem]);
    showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} added!`);
  };

  const handleRemoveSelected = () => {
    if (selectedFurnitureId) {
      setFurniture(furniture.filter((item) => item.id !== selectedFurnitureId));
      setSelectedFurnitureId(null);
      showNotification('Item removed!');
    }
  };

  const handleSaveDesign = async () => {
    try {
      const { error } = await supabase.from('room_designs').insert({
        user_id: 'anonymous',
        style: selectedStyle,
        wall_color: wallColor,
        furniture_items: furniture,
      });

      if (error) throw error;
      showNotification('Design saved successfully!');
    } catch (error) {
      console.error('Error saving design:', error);
      showNotification('Failed to save design');
    }
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>Interactive Room Designer</h1>
        <p style={headerSubtitleStyle}>
          Create your perfect space with AI-powered suggestions
        </p>
      </header>

      <div style={mainContentStyle}>
        <aside style={sidebarStyle}>
          <StyleSelector
            selectedStyle={selectedStyle}
            onStyleChange={setSelectedStyle}
            onGenerateSuggestions={handleGenerateSuggestions}
          />
          <Controls
            wallColor={wallColor}
            onWallColorChange={setWallColor}
            onAddFurniture={handleAddFurniture}
            onRemoveSelected={handleRemoveSelected}
            hasSelection={selectedFurnitureId !== null}
          />
          <button onClick={handleSaveDesign} style={saveButtonStyle}>
            Save Design
          </button>
        </aside>

        <main style={sceneContainerStyle}>
          <Scene
            wallColor={wallColor}
            furniture={furniture}
            selectedFurnitureId={selectedFurnitureId}
            onSelectFurniture={setSelectedFurnitureId}
          />
          <div style={instructionsStyle}>
            <p>🖱️ Click and drag to rotate • Scroll to zoom • Right-click to pan</p>
          </div>
        </main>
      </div>

      {showSuggestions && (
        <SuggestionsPanel
          suggestions={suggestions}
          onApplySuggestion={handleApplySuggestion}
          onClose={() => setShowSuggestions(false)}
        />
      )}

      {notification && (
        <div style={notificationStyle}>
          {notification}
        </div>
      )}
    </div>
  );
}

const appContainerStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: '#f5f5f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const headerStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
  color: 'white',
  padding: '28px 40px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
  backdropFilter: 'blur(10px)',
};

const headerTitleStyle: React.CSSProperties = {
  margin: '0 0 8px 0',
  fontSize: '32px',
  fontWeight: '800',
  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const headerSubtitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '16px',
  opacity: 0.85,
  color: '#cbd5e1',
  fontWeight: '500',
};

const mainContentStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  gap: '20px',
  padding: '20px',
  overflow: 'hidden',
};

const sidebarStyle: React.CSSProperties = {
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  overflowY: 'auto',
  paddingRight: '8px',
  scrollBehavior: 'smooth',
};

const sceneContainerStyle: React.CSSProperties = {
  flex: 1,
  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  borderRadius: '16px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid rgba(203, 213, 225, 0.5)',
};

const instructionsStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(0,0,0,0.7)',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '13px',
  pointerEvents: 'none',
};

const saveButtonStyle: React.CSSProperties = {
  padding: '14px',
  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '15px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
};

const notificationStyle: React.CSSProperties = {
  position: 'fixed',
  top: '100px',
  right: '32px',
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  color: '#e0e7ff',
  padding: '16px 24px',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  zIndex: 2000,
  fontSize: '14px',
  fontWeight: '600',
  backdropFilter: 'blur(10px)',
  animation: 'slideIn 0.3s ease-out',
};

export default App;
