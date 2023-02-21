import * as LoginModal from './Modals/Login'
import * as SignUpModal from './Modals/SignUp'
import * as Navbar from './Navbar/Navbar'
import * as Hero from './Hero'
import * as Footer from './Footer'

import { translations as ModalTranslations } from './Modals/translations'
import { translations as ComponentTranslations } from './translations'

export const component = {
  login: LoginModal,
  signup: SignUpModal,
  navbar: Navbar,
  hero: Hero,
  footer: Footer,
}

export const translations = [ModalTranslations, ComponentTranslations]
