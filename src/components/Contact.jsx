
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

function Contact(){
    return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white px-6 transition-colors duration-500 flex flex-col items-center justify-start py-12 space-y-12">
      <h1 className="text-5xl font-extrabold mb-6">Contact Me</h1>

      <div className="w-full max-w-xl space-y-6">
        <ContactItem
          icon={<Mail className="w-6 h-6 text-blue-500" />}
          label="Email"
          value="example@gmail.com"
          href="mailto:example@gmail.com"
        />
        <ContactItem
          icon={<Github className="w-6 h-6 text-gray-800 dark:text-white" />}
          label="GitHub"
          value="github.com/PokeYoda"
          href="https://github.com/PokeYoda"
        />
        <ContactItem
          icon={<Linkedin className="w-6 h-6 text-blue-700" />}
          label="LinkedIn"
          value="linkedin.com/in/franciszek-woźniak-0706a6322"
          href="https://linkedin.com/in/franciszek-woźniak-0706a6322"
        />
        <ContactItem
          icon={<Phone className="w-6 h-6 text-green-500" />}
          label="Phone"
          value="+48 832 947 399"
          href="tel:+11234567890"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-[1.02] hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform"
    >
      {icon}
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-lg font-medium">{value}</div>
      </div>
    </a>
  );
}


export default Contact