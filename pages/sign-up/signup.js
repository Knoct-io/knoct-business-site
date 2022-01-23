import styles from '../../styles/Pages/sign-up/signup.module.css'
import SignupModal from '../../components/Modals/SignupModal'

export default function signup() {
  return (
    <div className={[styles['container']]}>
      <SignupModal/>

    </div>
  )
}
