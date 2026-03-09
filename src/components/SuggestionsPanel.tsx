import type { AISuggestion } from '../types';

interface SuggestionsPanelProps {
  suggestions: AISuggestion[];
  onApplySuggestion: (suggestion: AISuggestion) => void;
  onClose: () => void;
}

export function SuggestionsPanel({
  suggestions,
  onApplySuggestion,
  onClose,
}: SuggestionsPanelProps) {
  if (suggestions.length === 0) return null;

  return (
    <div style={overlayStyle}>
      <div style={panelStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>AI Design Suggestions</h2>
          <button onClick={onClose} style={closeButtonStyle}>
            ✕
          </button>
        </div>

        <div style={suggestionsGridStyle}>
          {suggestions.map((suggestion, index) => (
            <div key={index} style={suggestionCardStyle}>
              <div style={previewStyle}>
                <div
                  style={{
                    ...wallPreviewStyle,
                    background: suggestion.wallColor,
                  }}
                />
                <div style={furnitureCountStyle}>
                  {suggestion.furnitureItems.length} pieces
                </div>
              </div>
              <div style={infoStyle}>
                <h3 style={optionTitleStyle}>Design {index + 1}</h3>
                <p style={descriptionStyle}>{suggestion.description}</p>
                <button
                  onClick={() => onApplySuggestion(suggestion)}
                  style={applyButtonStyle}
                >
                  Apply Design
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  animation: 'fadeIn 0.3s ease-out',
};

const panelStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  borderRadius: '18px',
  maxWidth: '1200px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  padding: '32px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  border: '1px solid rgba(203, 213, 225, 0.5)',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '32px',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '28px',
  fontWeight: '800',
  color: '#0f172a',
};

const closeButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
  border: '1px solid #d1d5db',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#374151',
  padding: '8px 12px',
  lineHeight: 1,
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

const suggestionsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '24px',
};

const suggestionCardStyle: React.CSSProperties = {
  border: '2px solid #cbd5e1',
  borderRadius: '14px',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'white',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

const previewStyle: React.CSSProperties = {
  position: 'relative',
  height: '180px',
  background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wallPreviewStyle: React.CSSProperties = {
  width: '85%',
  height: '85%',
  borderRadius: '10px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
};

const furnitureCountStyle: React.CSSProperties = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  color: 'white',
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: '700',
  boxShadow: '0 4px 12px rgba(96, 165, 250, 0.3)',
};

const infoStyle: React.CSSProperties = {
  padding: '20px',
};

const optionTitleStyle: React.CSSProperties = {
  margin: '0 0 10px 0',
  fontSize: '18px',
  fontWeight: '700',
  color: '#0f172a',
};

const descriptionStyle: React.CSSProperties = {
  margin: '0 0 16px 0',
  fontSize: '14px',
  color: '#64748b',
  lineHeight: '1.6',
  fontWeight: '500',
};

const applyButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)',
};
