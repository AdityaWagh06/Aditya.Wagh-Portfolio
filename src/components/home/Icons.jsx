// Small line and brand icons drawn inline (no icon fonts, no emoji).
const S = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props} />
const F = (props) => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} />

export const IconX = (p) => <F {...p}><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" /></F>
export const IconGitHub = (p) => <F {...p}><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></F>
export const IconLinkedIn = (p) => <F {...p}><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5Z" /></F>
export const IconMedium = (p) => <F {...p}><ellipse cx="7" cy="12" rx="5.5" ry="5.8" /><ellipse cx="16.4" cy="12" rx="2.7" ry="5.4" /><ellipse cx="21" cy="12" rx="1" ry="4.9" /></F>
export const IconHome = (p) => <S {...p}><path d="M4 11l8-6.5 8 6.5V20H4z" /></S>
export const IconCode = (p) => <S {...p}><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></S>
export const IconBriefcase = (p) => <S {...p}><path d="M4 8h16v11H4zM9 8V5h6v3" /></S>
export const IconSearch = (p) => <S {...p}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></S>
export const IconStar = (p) => <F {...p}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></F>
export const IconFork = (p) => <S {...p}><circle cx="6" cy="5" r="2" /><circle cx="18" cy="5" r="2" /><circle cx="12" cy="19" r="2" /><path d="M6 7v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 12v5" /></S>
export const IconBranch = (p) => <S {...p}><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 8v8M18 10a6 6 0 0 1-6 6H8" /></S>
export const IconGlobe = (p) => <S {...p}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" /></S>
export const IconDoc = (p) => <S {...p}><path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5" /></S>
export const IconSun = (p) => <S {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></S>
export const IconMoon = (p) => <S {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></S>
