import type { FurnitureType } from '../types';

interface ControlsProps {
  wallColor: string;
  onWallColorChange: (color: string) => void;
  onAddFurniture: (type: FurnitureType) => void;
  onRemoveSelected: () => void;
  hasSelection: boolean;
}

const wallColors = [
  { name: 'White', color: '#FFFFFF' },
  { name: 'Light Gray', color: '#E5E5E5' },
  { name: 'Beige', color: '#F5F5DC' },
  { name: 'Light Blue', color: '#ADD8E6' },
  { name: 'Sage', color: '#B2C9AB' },
  { name: 'Cream', color: '#FFFDD0' },
  { name: 'Navy', color: '#2C3E50' },
  { name: 'Charcoal', color: '#424242' },
];

const furnitureTypes: { type: FurnitureType; label: string; icon: string }[] = [
  { type: 'sofa', label: 'Sofa', icon: '🛋️' },
  { type: 'chair', label: 'Chair', icon: '🪑' },
  { type: 'table', label: 'Table', icon: '📍' },
  { type: 'lamp', label: 'Lamp', icon: '💡' },
  { type: 'plant', label: 'Plant', icon: '🌿' },
  { type: 'bookshelf', label: 'Shelf', icon: '📚' },
];

export function Controls({
  wallColor,
  onWallColorChange,
  onAddFurniture,
  onRemoveSelected,
  hasSelection,
}: ControlsProps) {
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Wall Color</h3>
        <div style={colorGridStyle}>
          {wallColors.map((item) => (
            <button
              key={item.color}
              onClick={() => onWallColorChange(item.color)}
              style={{
                ...colorButtonStyle,
                background: item.color,
                border:
                  wallColor === item.color
                    ? '3px solid #60a5fa'
                    : '2px solid #cbd5e1',
                boxShadow:
                  wallColor === item.color
                    ? '0 0 0 3px rgba(96, 165, 250, 0.1)'
                    : 'none',
                transform:
                  wallColor === item.color
                    ? 'scale(1.05)'
                    : 'scale(1)',
              }}
              title={item.name}
            />
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Add Furniture</h3>
        <div style={furnitureGridStyle}>
          {furnitureTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => onAddFurniture(item.type)}
              style={furnitureButtonStyle}
            >
              <span style={iconStyle}>{item.icon}</span>
              <span style={labelStyle}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {hasSelection && (
        <button onClick={onRemoveSelected} style={removeButtonStyle}>
          🗑️ Remove Item
        </button>
      )}
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '24px',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  borderRadius: '14px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(203, 213, 225, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const sectionTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '16px',
  fontWeight: '700',
  color: '#0f172a',
};

const colorGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '8px',
};

const colorButtonStyle: React.CSSProperties = {
  width: '52px',
  height: '52px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

const furnitureGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
};

const furnitureButtonStyle: React.CSSProperties = {
  padding: '12px',
  border: '2px solid #cbd5e1',
  borderRadius: '10px',
  background: 'white',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  fontSize: '14px',
};

const iconStyle: React.CSSProperties = {
  fontSize: '22px',
  lineHeight: 1,
};

const labelStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#0f172a',
};

const removeButtonStyle: React.CSSProperties = {
  padding: '12px',
  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
};
