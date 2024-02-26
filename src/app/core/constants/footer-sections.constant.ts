import { IFooterSection } from '@models/footer-section.interface';

export const FOOTER_SECTIONS: IFooterSection[] = [
  {
    title: 'About',
    sections: [
      {
        label: 'About Us',
        link: 'about',
      },
      {
        label: 'Features',
        link: 'features',
      },
      {
        label: 'News',
        link: 'news',
      },
      {
        label: 'Menu',
        link: 'menu',
      },
    ],
  },
  {
    title: 'Company',
    sections: [
      {
        label: 'Why Extaste?',
        link: 'why-extaste',
      },
      {
        label: 'Partner With Us',
        link: 'partner',
      },
      {
        label: 'FAQ',
        link: 'faq',
      },
      {
        label: 'Blog',
        link: 'blog',
      },
    ],
  },
  {
    title: 'Support',
    sections: [
      {
        label: 'Account',
        link: 'account',
      },
      {
        label: 'Support Center',
        link: 'support',
      },
      {
        label: 'Feedback',
        link: 'feedback',
      },
      {
        label: 'Contact Us',
        link: 'contact-us',
      },
      {
        label: 'Accessibilty',
        link: 'accessibilty',
      },
    ],
  },
  {
    title: 'Get in Touch',
    sections: [
      {
        label: 'Question or feedback?',
        link: 'questions',
      },
      {
        label: 'We’d love to hear from you',
        link: 'get-in-touch',
      }
    ],
  },
];
