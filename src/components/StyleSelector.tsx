import type { StylePreference } from '../types';

interface StyleSelectorProps {
  selectedStyle: StylePreference;
  onStyleChange: (style: StylePreference) => void;
  onGenerateSuggestions: () => void;
}

const styles: { value: StylePreference; label: string; description: string; icon: string }[] = [
  { value: 'modern', label: 'Modern', description: 'Clean & contemporary', icon: '✨' },
  { value: 'minimalist', label: 'Minimalist', description: 'Simple & essential', icon: '◯' },
  { value: 'traditional', label: 'Traditional', description: 'Classic & timeless', icon: '🕰️' },
  { value: 'industrial', label: 'Industrial', description: 'Urban & raw', icon: '⚙️' },
  { value: 'bohemian', label: 'Bohemian', description: 'Eclectic & relaxed', icon: '🌸' },
];

export function StyleSelector({
  selectedStyle,
  onStyleChange,
  onGenerateSuggestions,
}: StyleSelectorProps) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Design Style</h2>
      <div style={styleGridStyle}>
        {styles.map((style) => (
          <button
            key={style.value}
            onClick={() => onStyleChange(style.value)}
            style={{
              ...styleButtonStyle,
              ...(selectedStyle === style.value ? selectedStyleButtonStyle : {}),
            }}
          >
            <div style={iconStyle}>{style.icon}</div>
            <div style={styleLabelStyle}>{style.label}</div>
            <div style={styleDescStyle}>{style.description}</div>
          </button>
        ))}
      </div>
      <button onClick={onGenerateSuggestions} style={generateButtonStyle}>
        ✨ Generate AI Designs
      </button>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  padding: '24px',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  borderRadius: '14px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(203, 213, 225, 0.5)',
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 18px 0',
  fontSize: '18px',
  fontWeight: '700',
  color: '#0f172a',
};

const styleGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  marginBottom: '18px',
};

const styleButtonStyle: React.CSSProperties = {
  padding: '14px 12px',
  border: '2px solid #cbd5e1',
  borderRadius: '10px',
  background: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
};

const selectedStyleButtonStyle: React.CSSProperties = {
  borderColor: '#60a5fa',
  background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
  boxShadow: '0 4px 12px rgba(96, 165, 250, 0.2)',
};

const iconStyle: React.CSSProperties = {
  fontSize: '24px',
  lineHeight: 1,
};

const styleLabelStyle: React.CSSProperties = {
  fontWeight: '700',
  fontSize: '13px',
  color: '#0f172a',
};

const styleDescStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#64748b',
  fontWeight: '500',
};

const generateButtonStyle: React.CSSProperties = {
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
