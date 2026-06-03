import * as lucide from 'lucide-react';
console.log(Object.keys(lucide).filter(k => ['Linkedin', 'MessageCircle', 'Mail', 'ArrowRight', 'Send', 'Code'].includes(k)).join(', '));
console.log("Missing:");
['Linkedin', 'MessageCircle', 'Mail', 'ArrowRight', 'Send', 'Code'].forEach(k => {
  if (!Object.keys(lucide).includes(k)) console.log(k);
});
