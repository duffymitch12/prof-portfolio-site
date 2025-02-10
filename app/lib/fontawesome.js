// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'; // ✅ Add brand icons

library.add(faUserSecret, faPhone, faHome, faEnvelope, faGithub, faLinkedin, faDiscord); // ✅ Add icons to library
