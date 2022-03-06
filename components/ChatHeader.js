import styles from '../styles/chatHeader.module.css'
import inbox from '../assets/icons/inbox.svg'
import video from '../assets/icons/video.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import personPlus from '../assets/icons/person-plus.svg'
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'
import ethLogo from '../assets/eth.png'
import Image from 'next/image'
import {useContext} from 'react'
import {DiscordContext} from '../context/context'

const currentAccount = '0x9D95BCaa5B609Fa97A7EC860bEc115aA94f85BA9'

const ChatHeader = () => {
    const {roomName, currentAccount, connectWallet} = useContext(DiscordContext)
  return (
    <div className={styles.chatHeader}>
        <div className={styles.roomNameContainer}>
            <Image src={at} height={200} width={20} className={styles.svg} alt='' />
            <h3 className={styles.title}>{roomName}</h3>
            <div className={styles.chatHeaderStatus} id='online' />
        </div>
        {currentAccount ? (
            <div className={styles.connectedWallet}>
                <Image src={ethLogo} height={20} width={20} alt='ethLogo' />
                <span className={styles.separator}>{'|'}</span>
                {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
            </div>
        ) : (
            <div className={styles.connectWallet} onClick={() => connectWallet()}>
                Connect Wallet
            </div>
        )}

        <div className={styles.headerIconsContainer}>
            <div className={styles.headerItem}>
                <Image 
                    height={25}
                    width={25}
                    src={phone}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <Image 
                    height={25}
                    width={25}
                    src={video}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <Image 
                    height={25}
                    width={25}
                    src={personPlus}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <Image 
                    height={25}
                    width={25}
                    src={inbox}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <input type="search" placeholder="Search" />
            </div>
            <div className={styles.headerItem}>
                <Image 
                    height={25}
                    width={25}
                    src={help}
                    className={styles.svg}
                    alt=''
                />
            </div>
        </div>
    </div>
  )
}

export default ChatHeader