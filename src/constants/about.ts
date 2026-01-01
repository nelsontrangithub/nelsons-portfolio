export type AboutType = {
  input: string;
  return: string;
};

export const abouts: AboutType[] = [
  {
    input: "Nelson.currentLocation",
    return: '"Vancouver, B.C, Canada"',
  },
  {
    input: "Nelson.contactInfo",
    return:
      '["<a href="mailto:nelsontran@icloud.com">nelsontran@icloud.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/nelsontran/">LinkedIn</a>", "<a rel="noopener" href="https://github.com/nelsontrangithub">github</a>"]',
  },
  {
    input: "Nelson.interests",
    return: '["coding", "basketball", "cooking", "hiking"]',
  },
  {
    input: "Nelson.education",
    return: '"Software Systems Developer - British Columbia Institude of Technology"',
  },
  {
    input: "Nelson.skills",
    return:
      '["C#", "ASP .NET CORE", "JavaScript", "TypeScript", "React", "Redux", "Sass", "webpack", "git"]',
  },
];
