module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FDFBF7',
          card: '#FFFDF9',
          muted: '#F5EFE6',
          border: '#E8DFD5',
        },
        ink: {
          DEFAULT: '#231F20',
          dark: '#161314',
          light: '#59534E',
          muted: '#8C827A',
        },
        doodle: {
          coral: '#E57368',
          'coral-dark': '#CE5C52',
          'coral-light': '#FCDCD9',
          sage: '#6C8B74',
          'sage-dark': '#55725D',
          'sage-light': '#DCEBE0',
          mustard: '#E9B84C',
          'mustard-dark': '#CF9B2E',
          'mustard-light': '#FDF1D6',
          terracotta: '#D96B4F',
          blue: '#6B9AC4',
          'blue-light': '#E0EFFB',
        },
      },
      fontFamily: {
        doodle: ['"Patrick Hand"', '"Gaegu"', 'cursive', 'sans-serif'],
        hand: ['"Gaegu"', '"Patrick Hand"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', '"EpilogueLocal"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'doodle-sm': '2px 2px 0px #231F20',
        doodle: '3px 3px 0px #231F20',
        'doodle-md': '4px 4px 0px #231F20',
        'doodle-lg': '6px 6px 0px #231F20',
        'doodle-hover': '5px 5px 0px #231F20',
        'doodle-pressed': '1px 1px 0px #231F20',
        'doodle-coral': '4px 4px 0px #CE5C52',
        'doodle-mustard': '4px 4px 0px #CF9B2E',
      },
      borderRadius: {
        doodle: '255px 15px 225px 15px/15px 225px 15px 255px',
        'doodle-sm': '125px 10px 115px 10px/10px 115px 10px 125px',
        'doodle-pill': '255px 25px 225px 25px/25px 225px 25px 255px',
        'doodle-round': '50% 50% 50% 50% / 60% 60% 40% 40%',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Colors via CSS variables (the v0.5 recommended approach)
            '--tw-prose-body':       theme('colors.slate[500]'),
            '--tw-prose-headings':   theme('colors.slate[800]'),
            '--tw-prose-links':      theme('colors.blue[600]'),
            '--tw-prose-bold':       theme('colors.slate[700]'),
            '--tw-prose-counters':   theme('colors.slate[400]'),
            '--tw-prose-bullets':    theme('colors.slate[300]'),
            '--tw-prose-hr':         theme('colors.slate[200]'),
            '--tw-prose-quotes':     theme('colors.slate[600]'),
            '--tw-prose-quote-borders': theme('colors.slate[200]'),
            '--tw-prose-captions':   theme('colors.slate[400]'),
            '--tw-prose-code':       theme('colors.slate[700]'),
            '--tw-prose-pre-code':   theme('colors.slate[600]'),
            '--tw-prose-pre-bg':     theme('colors.slate[50]'),
            '--tw-prose-th-borders': theme('colors.slate[200]'),
            '--tw-prose-td-borders': theme('colors.slate[100]'),

            // Typography scale — compact & readable
            fontSize:   '0.9rem',
            lineHeight: '1.75',

            // Headings
            'h1': { fontSize: '1.25rem', marginTop: '2rem',   marginBottom: '0.75rem', fontWeight: '600', letterSpacing: '-0.015em' },
            'h2': { fontSize: '1.1rem',  marginTop: '1.75rem', marginBottom: '0.5rem',  fontWeight: '600', letterSpacing: '-0.015em' },
            'h3': { fontSize: '0.95rem', marginTop: '1.5rem', marginBottom: '0.4rem',  fontWeight: '600', letterSpacing: '-0.015em' },
            'h4': { fontSize: '0.9rem',  marginTop: '1.25rem', marginBottom: '0.35rem', fontWeight: '600' },

            // Paragraphs
            'p': { marginTop: '0', marginBottom: '0.85rem' },

            // Links
            'a': { textUnderlineOffset: '3px' },
            'a:hover': { color: theme('colors.blue[800]') },

            // Code
            'code': {
              fontSize: '0.82rem',
              backgroundColor: theme('colors.slate[100]'),
              borderRadius: '4px',
              padding: '0.1em 0.35em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after':  { content: '""' },

            // Pre
            'pre': {
              backgroundColor: theme('colors.slate[50]'),
              border: `1px solid ${theme('colors.slate[200]')}`,
              borderRadius: '10px',
              fontSize: '0.82rem',
            },

            // Lists
            'ul, ol': { paddingLeft: '1.25rem', marginBottom: '0.85rem' },
            'li':     { marginBottom: '0.25rem' },

            // Blockquote
            'blockquote': {
              borderLeftWidth: '3px',
              borderLeftColor: theme('colors.slate[200]'),
              paddingLeft: '1rem',
              fontStyle: 'italic',
              fontWeight: '400',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
