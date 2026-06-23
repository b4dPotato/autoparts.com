export const contactPhone = {
  display: '+380 97 296 91 02',
  international: '+380972969102',
  compact: '380972969102'
} as const;

export const contacts = [
  {
    key: 'telegram',
    href: `https://t.me/+${contactPhone.compact}`,
    icon: '/assets/icons/telegram.svg'
  },
  {
    key: 'viber',
    href: `viber://chat?number=${encodeURIComponent(contactPhone.international)}`,
    icon: '/assets/icons/viber.svg'
  },
  {
    key: 'whatsapp',
    href: `https://wa.me/${contactPhone.compact}`,
    icon: '/assets/icons/whatsapp.svg'
  },
  {
    key: 'phone',
    href: `tel:${contactPhone.international}`,
    icon: null
  }
] as const;

export type ContactKey = (typeof contacts)[number]['key'];
