module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
