import { ChatStep } from '../../shared/chat-ui/chat-ui.component';

export const TopicData: ChatStep[] = [
    {
        type: 'mentor',
        text: 'Hey Jibran 👋 Today we’ll learn about Accessibility (a11y) in Angular. Ready?',
        nextHint: 'Yes! What does accessibility mean in web development?'
    },
    {
        type: 'mentor',
        question: 'Yes! What does accessibility mean in web development?',
        text: 'Accessibility ensures your apps are usable by everyone, including users with disabilities. It focuses on keyboard navigation, screen readers, and visual contrast.',
        nextHint: 'How do we make Angular components accessible?'
    },
    {
        type: 'mentor',
        question: 'How do we make Angular components accessible?',
        text: `Key practices:
1️⃣ Use semantic HTML (<button>, <nav>).
2️⃣ Add ARIA labels where needed.
3️⃣ Manage focus with Renderer2 or Angular CDK.
4️⃣ Support keyboard shortcuts.`,
        nextHint: 'Can you show an example?'
    },
    {
        type: 'mentor',
        question: 'Can you show an example?',
        text: `<button aria-label="Save Changes">💾 Save</button>
This ensures screen readers announce “Save Changes” for icon-only buttons.`,
        nextHint: 'What are common mistakes developers make?'
    },
    {
        type: 'mentor',
        question: 'What are common mistakes developers make?',
        text: `❌ Missing alt text
❌ Custom components without ARIA roles
❌ Poor keyboard navigation
✅ Fix: Use Angular Material CDK or axe DevTools.`,
        nextHint: null
    }
];
