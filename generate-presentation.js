import PptxGenJs from 'pptxgenjs';

const prs = new PptxGenJs();

prs.defineLayout({ name: 'LAYOUT1', master: 'MASTER1' });
prs.defineLayout({ name: 'LAYOUT2', master: 'MASTER1' });

const colors = {
  primary: '667eea',
  secondary: '764ba2',
  accent: '3b82f6',
  success: '10b981',
  dark: '1a1a1a',
  light: 'f5f5f5',
  white: 'ffffff',
};

const addTitleSlide = (title, subtitle) => {
  const slide = prs.addSlide();
  slide.background = { color: colors.primary };

  slide.addText(title, {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1.5,
    fontSize: 54,
    bold: true,
    color: colors.white,
    align: 'center',
    fontFace: 'Arial',
  });

  slide.addText(subtitle, {
    x: 0.5,
    y: 3.7,
    w: 9,
    h: 1,
    fontSize: 28,
    color: colors.white,
    align: 'center',
    fontFace: 'Arial',
  });

  slide.addText('A Game Development Project with Generative AI Integration', {
    x: 0.5,
    y: 5.2,
    w: 9,
    h: 0.6,
    fontSize: 18,
    color: '#e0e7ff',
    align: 'center',
    fontFace: 'Arial',
  });
};

const addContentSlide = (title, content) => {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  slide.addText(title, {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 44,
    bold: true,
    color: colors.primary,
    fontFace: 'Arial',
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5,
    y: 1,
    w: 9,
    h: 0.05,
    fill: { color: colors.primary },
    line: { type: 'none' },
  });

  let yPos = 1.3;
  content.forEach((item) => {
    slide.addText(item, {
      x: 0.7,
      y: yPos,
      w: 8.6,
      h: 0.5,
      fontSize: 20,
      color: colors.dark,
      fontFace: 'Arial',
      bullet: true,
    });
    yPos += 0.65;
  });
};

const addTwoColumnSlide = (title, leftContent, rightContent) => {
  const slide = prs.addSlide();
  slide.background = { color: colors.white };

  slide.addText(title, {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 44,
    bold: true,
    color: colors.primary,
    fontFace: 'Arial',
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0.5,
    y: 1,
    w: 9,
    h: 0.05,
    fill: { color: colors.primary },
    line: { type: 'none' },
  });

  let yPos = 1.3;
  leftContent.forEach((item) => {
    slide.addText(item, {
      x: 0.7,
      y: yPos,
      w: 4,
      h: 0.5,
      fontSize: 18,
      color: colors.dark,
      fontFace: 'Arial',
      bullet: true,
    });
    yPos += 0.6;
  });

  yPos = 1.3;
  rightContent.forEach((item) => {
    slide.addText(item, {
      x: 5.2,
      y: yPos,
      w: 4,
      h: 0.5,
      fontSize: 18,
      color: colors.dark,
      fontFace: 'Arial',
      bullet: true,
    });
    yPos += 0.6;
  });
};

// Slide 1: Title Slide
addTitleSlide('Interactive Room Designer', 'Design Your Perfect Space with AI');

// Slide 2: Project Overview
addContentSlide('Project Overview', [
  'A 3D interactive web application for home decor design',
  'Allows users to place furniture and customize wall colors in real-time',
  'Integrates generative AI to suggest complete room designs based on style preferences',
  'Demonstrates game development mechanics using Three.js and React',
  'Combines creativity with cutting-edge AI technology',
]);

// Slide 3: Key Features - Part 1
addContentSlide('Core Features', [
  '3D Interactive Room: Fully rendered room with orbit camera controls',
  'Furniture Placement: Add 6 types of furniture (sofas, chairs, tables, lamps, plants, bookshelves)',
  'Wall Customization: Choose from 8 carefully selected wall colors',
  'Real-time Updates: See changes instantly as you interact',
  'Click-based Selection: Select and remove furniture items with ease',
]);

// Slide 4: Key Features - Part 2
addContentSlide('AI-Powered Features', [
  '5 Design Styles: Modern, Minimalist, Traditional, Industrial, Bohemian',
  'AI Suggestions: Generate 5 unique room designs per style',
  'Smart Color Schemes: Coordinated colors that match design aesthetics',
  'Furniture Layouts: 5 different arrangement patterns per style',
  'One-Click Apply: Instantly populate room with suggested design',
]);

// Slide 5: How It Works - User Flow
addTwoColumnSlide(
  'How It Works',
  [
    'User Interface:',
    '• Select design style',
    '• View 5 AI suggestions',
    '• Apply preferred design',
    '• Customize further',
    '• Save final design',
  ],
  [
    'Technical Process:',
    '• 3D canvas renders room',
    '• AI generates layout options',
    '• Real-time synchronization',
    '• Database persistence',
    '• Responsive interactions',
  ]
);

// Slide 6: Design Styles Explained
addTwoColumnSlide(
  'Design Styles',
  [
    'Modern & Minimalist:',
    '• Clean lines, neutral colors',
    '• Focus on space & essential items',
    '• Contemporary feel',
    '',
    'Traditional & Industrial:',
    '• Warm wood, classic furniture',
    '• Raw materials, urban aesthetic',
  ],
  [
    'Bohemian:',
    '• Eclectic mix of colors',
    '• Natural elements',
    '• Relaxed, artistic vibe',
    '',
    'Color Coordination:',
    '• Style-specific palettes',
    '• Harmonious combinations',
  ]
);

// Slide 7: 3D Interaction & Controls
addContentSlide('3D Interaction & Camera Controls', [
  'Rotate: Click and drag with mouse to rotate view around the room',
  'Zoom: Scroll wheel to zoom in and out for detailed inspection',
  'Pan: Right-click and drag to move the view without rotation',
  'Furniture Selection: Click on any furniture item to select it (highlights with gold ring)',
  'Real-time Shadows & Lighting: Dynamic shadows for realistic appearance',
]);

// Slide 8: User Interface Layout
addContentSlide('User Interface Layout', [
  'Left Sidebar: Style selector, controls, and save button',
  'Main Canvas: Large 3D room visualization (70% of screen)',
  'Top Header: Title and subtitle with gradient background',
  'Bottom Instructions: Helper text explaining camera controls',
  'Modal Panels: AI suggestions display with apply options',
]);

// Slide 9: Furniture System
addTwoColumnSlide(
  'Furniture Types & Customization',
  [
    'Available Furniture:',
    '• Sofa (2-seater)',
    '• Chair (single)',
    '• Table (dining/center)',
    '• Lamp (floor lamp)',
    '• Plant (potted plant)',
  ],
  [
    'Customization Options:',
    '• Position (X, Y, Z coordinates)',
    '• Rotation (360° adjustable)',
    '• Color (style-specific)',
    '• Selection/Deletion',
    '• Multiple items at once',
  ]
);

// Slide 10: AI Suggestion Engine
addContentSlide('AI Suggestion Engine', [
  'Style-based Generation: Creates unique designs for each selected style',
  'Color Coordination: Assigns colors from style-specific palettes',
  'Layout Patterns: 5 predefined furniture arrangement templates',
  'Descriptive Text: Each suggestion includes design explanation',
  'Instant Application: One-click to populate entire room design',
]);

// Slide 11: Technology Stack
addTwoColumnSlide(
  'Technology Stack',
  [
    'Frontend:',
    '• React 19 (UI framework)',
    '• TypeScript (type safety)',
    '• Vite (build tool)',
    '• Three.js (3D graphics)',
  ],
  [
    'Libraries & Services:',
    '• React Three Fiber (React + Three.js)',
    '• React Three Drei (3D utilities)',
    '• Supabase (database)',
    '• CSS-in-JS (styling)',
  ]
);

// Slide 12: Project Structure
addContentSlide('Project Structure', [
  'Components: Room, Furniture, Scene, Controls, StyleSelector, SuggestionsPanel',
  'Utilities: aiSuggestions (generation logic)',
  'Types: TypeScript definitions for all data structures',
  'Services: Supabase client initialization',
  'Assets: 3D models generated as geometric primitives',
]);

// Slide 13: Database & Data Persistence
addContentSlide('Database & Data Persistence', [
  'Supabase PostgreSQL Database: Stores user-created designs',
  'room_designs Table: Contains style, wall color, furniture layout',
  'JSON Storage: Furniture items stored as JSON arrays',
  'User Association: Each design linked to user ID',
  'Timestamps: Automatic creation date tracking',
]);

// Slide 14: Performance Optimization
addTwoColumnSlide(
  'Performance Optimization',
  [
    'Graphics:',
    '• Geometric primitives (no heavy models)',
    '• Shadow mapping for realism',
    '• Environment presets',
    '• Optimized lighting',
  ],
  [
    'Code:',
    '• Component-based architecture',
    '• Efficient state management',
    '• Type safety with TypeScript',
    '• Modular file organization',
  ]
);

// Slide 15: User Workflow
addContentSlide('Step-by-Step User Workflow', [
  '1. Select Design Style: Choose from 5 available styles',
  '2. Generate Suggestions: Click to see 5 AI-generated designs',
  '3. Preview Designs: View wall colors and furniture count',
  '4. Apply Design: Click to instantly populate the room',
  '5. Fine-tune: Manually add/remove furniture or change wall color',
  '6. Save: Store final design to database for future reference',
]);

// Slide 16: Real-time Feedback System
addContentSlide('User Experience Features', [
  'Notifications: Toast messages confirm all actions (added/removed/saved)',
  'Visual Feedback: Hover effects on buttons and furniture',
  'Selection Indicators: Gold ring highlights selected furniture',
  'Instructions: On-screen helper text for camera controls',
  'Responsive Design: Works seamlessly on different screen sizes',
]);

// Slide 17: Design Principles
addTwoColumnSlide(
  'Design & UX Principles',
  [
    'Visual Design:',
    '• Gradient header (blue-purple)',
    '• Consistent spacing (8px grid)',
    '• Professional color palette',
    '• Smooth transitions',
  ],
  [
    'User Experience:',
    '• Intuitive controls',
    '• Immediate feedback',
    '• Clear information hierarchy',
    '• Error handling & validation',
  ]
);

// Slide 18: Game Mechanics Integration
addContentSlide('Game Development Elements', [
  'Interactive Camera: 3D orbit controls similar to game cameras',
  'Physics-based Shadows: Real-time shadow mapping',
  'Click Detection: Raycasting for furniture selection',
  'State Management: Real-time updates of 3D scene state',
  'Animation: Smooth transitions and hover effects',
]);

// Slide 19: Future Enhancements
addTwoColumnSlide(
  'Future Enhancement Roadmap',
  [
    'User Features:',
    '• User authentication',
    '• Design library & history',
    '• Sharing & collaboration',
    '• Export as images/3D files',
  ],
  [
    'Technical Features:',
    '• Advanced materials & textures',
    '• Furniture library expansion',
    '• Room dimension customization',
    '• Mobile-optimized interface',
  ]
);

// Slide 20: Demo & Testing
addContentSlide('Demo Points to Highlight', [
  'Real-time 3D Rendering: Smooth, responsive 3D graphics',
  'AI Suggestions: Show variety of design options',
  'Furniture Placement: Add/remove items dynamically',
  'Wall Color Changes: Instant visual updates',
  'Database Integration: Save and load designs',
]);

// Slide 21: Key Takeaways
addContentSlide('Key Takeaways', [
  'Combines 3D graphics, game mechanics, and AI in one application',
  'Demonstrates full-stack development: frontend, backend, database',
  'User-friendly interface with professional design',
  'Practical AI integration for enhanced user experience',
  'Scalable architecture ready for additional features',
]);

// Slide 22: Conclusion
const slide = prs.addSlide();
slide.background = { color: colors.secondary };

slide.addText('Interactive Room Designer', {
  x: 0.5,
  y: 2.5,
  w: 9,
  h: 1,
  fontSize: 54,
  bold: true,
  color: colors.white,
  align: 'center',
  fontFace: 'Arial',
});

slide.addText('Creating Beautiful Spaces with Technology & AI', {
  x: 0.5,
  y: 3.8,
  w: 9,
  h: 0.8,
  fontSize: 32,
  color: '#e0e7ff',
  align: 'center',
  fontFace: 'Arial',
});

slide.addText('https://github.com/your-repo/interactive-room-designer', {
  x: 0.5,
  y: 5.2,
  w: 9,
  h: 0.5,
  fontSize: 16,
  color: colors.white,
  align: 'center',
  fontFace: 'Arial',
});

prs.writeFile({ fileName: 'Interactive_Room_Designer_Presentation.pptx' });
console.log('Presentation created successfully!');
