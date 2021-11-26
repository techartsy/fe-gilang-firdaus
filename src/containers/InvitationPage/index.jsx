import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllGuest } from '../../store/actions';

import StartedComponent from '../../components/Started';
import AudioComponent from '../../components/AudioPlayer';
import PopupProkes from '../../components/PopupProkes';
import Azmi from '../../static/images/azmi.png';
import Ridwan from '../../static/images/ridwan.png';
import Male from '../../static/images/male.png';
import Female from '../../static/images/female.png';
import WingTop from '../../static/images/wing-top.png';
import WingBottom from '../../static/images/wing-bottom.png';
import Frame from '../../static/images/frame.png';
import wingg from '../../static/images/wingg.png';
import topevent from '../../static/images/topevent.png';
import calender from '../../static/icons/calender.png';
import time from '../../static/icons/time.png';
import Location from '../../static/icons/location.png';
import plane from '../../static/icons/plane.png';
import gunungan from '../../static/images/gunungan.png';
import dropdown from '../../static/icons/dropdown.png';
import dropup from '../../static/icons/dropup.png';
import Mail from '../../static/icons/mail.png';
import MessageImg from '../../static/images/message-img.png';
import ClosingWing from '../../static/images/closing-wing.png';
import classes from './style.module.scss';

const InvitationPage = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [address, setAddress] = useState('');
  const [attend, setAttend] = useState('');
  const [note, setNote] = useState('');
  const [showPopupProkes, setShowPopupProkes] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  let name = location?.search?.split('=')[1];
  name = name?.split('+').join(' ');

  const message = [
    {
      name: 'Rinoto Harto',
      message: 'pesan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet volutpat arcu lorem amet. Nibh pellentesque feugiat est, sed augue sit et. Diam mi, nisi, neque senectus et. Mauris, imperdiet sodales magna nibh odio scelerisque dapibus purus tellus. Velit mi pellentesque diam cursus nam varius. Ornare sagittis, amet, non ultricies. Aliquam non amet mauris mattis nisi. Lacus metus, elit morbi mattis vulputate faucibus amet.'
    },
    {
      name: 'Rando Bintoro',
      message: 'pesan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet volutpat arcu lorem amet. Nibh pellentesque feugiat est, sed augue sit et. Diam mi, nisi, neque senectus et. Mauris, imperdiet sodales magna nibh odio scelerisque dapibus purus tellus. Velit mi pellentesque diam cursus nam varius. Ornare sagittis, amet, non ultricies. Aliquam non amet mauris mattis nisi. Lacus metus, elit morbi mattis vulputate faucibus amet.'
    },
    {
      name: 'Braja Sifa',
      message: 'pesan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet volutpat arcu lorem amet. Nibh pellentesque feugiat est, sed augue sit et. Diam mi, nisi, neque senectus et. Mauris, imperdiet sodales magna nibh odio scelerisque dapibus purus tellus. Velit mi pellentesque diam cursus nam varius. Ornare sagittis, amet, non ultricies. Aliquam non amet mauris mattis nisi. Lacus metus, elit morbi mattis vulputate faucibus amet.'
    },
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet volutpat',
      message: 'pesan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet volutpat arcu lorem amet. Nibh pellentesque feugiat est, sed augue sit et. Diam mi, nisi, neque senectus et. Mauris, imperdiet sodales magna nibh odio scelerisque dapibus purus tellus. Velit mi pellentesque diam cursus nam varius. Ornare sagittis, amet, non ultricies. Aliquam non amet mauris mattis nisi. Lacus metus, elit morbi mattis vulputate faucibus amet.'
    },
  ]

  useEffect(() => {
    dispatch(getAllGuest())
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const nextYear = year + 1;
    const difference = +new Date(`01/09/${nextYear}/09:00`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)) ? Math.floor(difference / (1000 * 60 * 60 * 24)) : '00',
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24) ? Math.floor((difference / (1000 * 60 * 60)) % 24) : '00',
        Menit: Math.floor((difference / 1000 / 60) % 60) !== 0 ? Math.floor((difference / 1000 / 60) % 60) : '00',
        Detik: Math.floor((difference / 1000) % 60) !== 0 ? Math.floor((difference / 1000) % 60) : '00'
      };
    } else {
      timeLeft = {
        Hari: '00',
        Jam: '00',
        Menit: '00',
        Detik: '00'
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className={classes.countdownItem}>
        <div className={classes.countdownTime}>
          {timeLeft[interval]}
        </div>
        <div className={classes.countdownInterval}>
          {interval}{" "}
        </div>
      </div>
    );
  });

  const openInvitation = () => {
    setIsInvitationOpen(!isInvitationOpen);
    setShowPopupProkes(!showPopupProkes);
    setIsPlaying(!isPlaying);
  }

  const showFormAttending = () => {
    setIsShow(!isShow)
  }

  const goToMaps = () => {
    window.open('https://goo.gl/maps/gLzmCKcPg8m8AQdM8', '_blank');
  }

  const radioAttend = (e) => {
    setAttend(e.target.value);
  };

  const onSubmitRadios = (e) => {
    e.preventDefault();
    console.log({
      guestName,
      address,
      attend,
      note
    });
  }

  const closePopupProkes = () => {
    setShowPopupProkes(!showPopupProkes);
  }

  const generateHeader = () => {
    return (
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          <p className={classes.titleTop}>Ridwan</p>
          <p className={classes.titleMid}>&</p>
          <p className={classes.titleBottom}>Azmi</p>
        </div>
        <div className={classes.countdown}>
          {timerComponents.length && timerComponents}
        </div>
      </div>
    );
  }

  const generateStory = () => {
    return (
      <div className={classes.storySection}>
        <div className={classes.storyWrapper}>
          <div className={classes.story}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget malesuada quam placerat sed tellus nulla pellentesque. Integer non, pharetra mattis amet, amet.</p>
          </div>
        </div>
        <div className={classes.imageWrapper}>
          <img src={Ridwan} alt='Brides' />
        </div>
      </div>
    );
  }

  const generateSecondStory = () => {
    return (
      <div className={classes.secondStoryContainer}>
        <div className={classes.imageWrapper}>
          <img src={Azmi} alt="Brides" />
        </div>
        <div className={classes.storyWrapper}>
          <div className={classes.story}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget malesuada quam placerat sed tellus nulla pellentesque. Integer non, pharetra mattis amet, amet.</p>
          </div>
        </div>
      </div>
    );
  }

  const secondImageSection = () => {
    return (
      <div className={classes.paralaxx}>
        <div className={classes.paralaxxWraper}>
        </div>
      </div>
    );
  }

  const summarySection = () => {
    return (
      <div className={classes.summary}>
        <div className={classes.bg}>
          <div className={classes.summaryWraper}>
            <div className={classes.title}>
              <p>
                Cerita Kita
              </p>
            </div>
            <p className={classes.summarySection}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis sagittis aliquet <br />
              volutpat arcu lorem amet. Nibh pellentesque feugiat est, sed augue sit et. Diam mi, <br />
              nisi, neque senectus et. Mauris, imperdiet sodales magna nibh odio scelerisque<br />
              dapibus purus tellus. Velit mi pellentesque diam cursus nam varius. Ornare<br />
              sagittis, amet, non ultricies. Aliquam non amet mauris mattis nisi. Lacus metus,<br />
              elit morbi mattis vulputate faucibus amet.
            </p>
            <img src={wingg} alt='wingBottom' />
          </div>
        </div>
      </div>
    )
  }

  const generateBridesProfile = () => {
    return (
      <div className={classes.bridesProfileContainer}>
        <div className={classes.wingWrapper}>
          <img className={classes.image} src={WingTop} alt="wing" />
        </div>
        <div className={classes.profileWrapper}>
          <div className={classes.card}>
            <img className={classes.bridesImage} src={Female} alt="brides" />
            <div className={classes.profileInfo}>
              <p className={classes.bridess}>Silmiati Azmi</p>
              <p className={classes.parents}>Putri Bungsu dari<br /> Bapak Muhammad Syarif (Alm) & Ibu Tetty Herawati</p>
            </div>
          </div>
          <div className={classes.card}>
            <img className={classes.bridesImage} src={Male} alt="brides" />
            <div className={classes.profileInfo}>
              <p className={classes.bridess}>Ridwan Krisdiansyah</p>
              <p className={classes.parents}>Putra Ketiga dari<br /> Bapak H. Padma Sujatma (Alm) & Ibu Hj. Ihat Suprihatin</p>
            </div>
          </div>
        </div>
        <div className={classes.wingWrapper}>
          <img className={classes.image} src={WingBottom} alt="wing" />
        </div>
      </div>
    );
  }

  const eventDetail = () => {
    return (
      <div className={classes.event}>
        <img className={classes.topEvent} src={topevent} alt='top' />
        <div className={classes.greeting}>
          <p>
            Assalamu'alaikum Warahmatullahi Wabarakatuh<br /><br />
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.<br />
            Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami
          </p>
        </div>
        <div className={classes.details}>
          <div className={classes.titleWraper}>
            <p className={classes.title}>AKAD & RESEPSI</p>
          </div>
          <div className={classes.calender}>
            <img src={calender} alt='calender' />
            <p>
              MINGGU, 09 JANUARI 2022
            </p>
          </div>
          <div className={classes.timesWraper}>
            <div className={classes.time}>
              <img src={time} alt='time' />
              <p>AKAD : PUKUL 09.00 WIB</p>
            </div>
            <div className={classes.time}>
              <img src={time} alt='time' />
              <p>
                RESEPSI : PUKUL 10.00 WIB s/d Selesai
              </p>
            </div>
          </div>
          <div className={classes.locationWraper}>
            <img src={Location} alt='location' />
            <p>
              KP. MULYASARI, RT. 01 RW. 02 DS. CIKADU KEC. CIBEBER KAB. LEBAK. BANTEN.
            </p>
          </div>
          <div onClick={goToMaps} className={classes.btnmap}>
            <p>Menuju Lokasi</p>
            <img src={plane} alt='gotomap' />
          </div>
        </div>
      </div>
    );
  }

  const thirdImageSeparator = () => {
    return (
      <div>
        <div className={classes.thirdImageSection}>
          <div className={classes.paralaxxWraper}></div>
        </div>
      </div>
    );
  }

  const generatePoemSection = () => {
    return (
      <div className={classes.poemSectionContainer}>
        <div className={classes.poemContainer}>
          <div className={classes.bg}>
            <img src={Frame} alt="frame" />
          </div>
          <div className={classes.poemWrapper}>
            <div className={classes.poemTop}>
              <p>Mama yang tercinta</p>
              <p>Akhirnya kutemukan juga jodohku</p>
              <p>Seseorang bagai kau</p>
              <p>Sederhana dalam tingkah dan bicara</p>
              <p>Serta sangat menyayangiku</p>
            </div>
            <div className={classes.poemMid}>
              <p>Mama</p>
              <p>Burung dara jantan nakal yang sejak dulu kau pelihara</p>
              <p>Kini terbang dan menemui jodohnya</p>
            </div>
            <div className={classes.poemBottom}>
              <p>Mama</p>
              <p>Aku telah menemukan jodohku</p>
              <p>Janganlah engkau cemburu</p>
              <p>Hendaklah hatimu yang baik itu mengerti</p>
              <p>Pada waktunya</p>
              <p>Aku mesti kau lepas pergi</p>
            </div>
            <p className={classes.author}>W.S. Rendra</p>
          </div>
        </div>
      </div>
    );
  }

  const attendingSection = () => {
    return (
      <div className={classes.attendingContainer}>
        <p className={classes.title}>"UCAPAN & DOA"</p>
        <div className={classes.attendingWraper}>
          <div className={classes.formWraper}>
            <div className={classes.dropdownSection} onClick={showFormAttending}>
              <p className={classes.formTitle}>Konfirmasi Kehadiran</p>
              <div className={classes.icon}>
                <img src={isShow ? dropup : dropdown} alt="dropdown" />
              </div>
            </div>
            <form className={`${classes.formContainer} ${!isShow ? classes.hide : classes.show}`} onSubmit={onSubmitRadios}>
              <div className={classes.inputForm}>
                <div className={classes.inputs}>
                  <input type='text' placeholder='Nama' required onChange={(e) => setGuestName(e.target.value)} />
                  <input type='text' placeholder='Alamat' required onChange={(e) => setAddress(e.target.value)} />
                  <textarea type='text' placeholder='Kirim Ucapan & Doa' onChange={(e) => setNote(e.target.value)} />
                </div>
              </div>
              <div onChange={radioAttend} className={classes.radiosInput}>
                <div className={classes.inputs}>
                  <p>Konfirmasi</p>
                  <input className={classes.radioItem} type='radio' name='attend' value='present' required ></input>
                  <label for='attend'>Akan Hadir</label>
                  <input className={classes.radioItem} type='radio' name='attend' value='absence' required></input>
                  <label for='attend'>Berhalangan Hadir</label>
                </div>
                <button type='submit' className={classes.btnSend}>Kirim Ucapan</button>
              </div>
            </form>
          </div>
          <div className={classes.expressionSection}>
            <img src={gunungan} alt="gunungan" />
            <p className={classes.expression}>
              Ungkapan terima kasih yang tulus dari kami apabila<br />
              Bapak/Ibu/Teman-teman berkenan hadir dan memberikan do'a restu
            </p>
          </div>
        </div>
      </div >
    );
  }

  const generateMessageSection = () => {
    return (
      <div className={classes.messageSectionContainer}>
        <div className={classes.sectionTitle}>
          <p>Ucapan & Doa kamu</p>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.leftSection}>
            <img src={gunungan} alt="gunungan" />
            <p>“ Sebuah Doa & Ucapan Untuk Kedua Mempelai ”</p>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.imgWrapper}>
              <img className={classes.image} src={MessageImg} alt="message" />
            </div>
            <div className={classes.messageWrapper}>
              {message && message.map((item, idx) => {
                return (
                  <div className={classes.messageItemWrapper} key={idx}>
                    <div className={classes.avatar}>
                      <img src={Mail} alt='avatar' />
                    </div>
                    <div className={classes.messageShape}>
                      <div className={classes.outerTriangle}>
                        <div className={classes.innerTriangle} />
                      </div>
                      <div className={classes.messageBubble}>
                        <div className={classes.name}>
                          {item.name}
                        </div>
                        <div className={classes.message}>
                          {item.message}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    );
  }

  const giftSection = () => {
    return (
      <div>
        <p>giftSection</p>
      </div>
    )
  }

  const closingSection = () => {
    return (
      <div className={classes.closingSectionContainer}>
        <div className={classes.closingSentenceWrapper}>
          <p>
            Kehadiran & doa Anda adalah berkah, kehormatan & kebahagiaan bagi kami.<br />
            Kami mengatakan dari hati kami yang terdalam<br/>
            atas perhatian Anda<br/>
            Terima kasih
          </p>
        </div>
        <img src={ClosingWing} alt="wing" className={classes.image} />
      </div>
    );
  }

  const footerSection = () => {
    return (
      <div>
        <p>footerSection</p>
      </div>
    )
  }

  const generateInvitation = () => {
    return (
      <div className={classes.invitationContainer}>
        {generateHeader()}
        {generateStory()}
        {generateSecondStory()}
        {secondImageSection()}
        {summarySection()}
        {generateBridesProfile()}
        {eventDetail()}
        {thirdImageSeparator()}
        {generatePoemSection()}
        {attendingSection()}
        {generateMessageSection()}
        {giftSection()}
        {closingSection()}
        {footerSection()}
        {/* <AudioComponent isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
        <PopupProkes open={showPopupProkes} handleClose={closePopupProkes} />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      {!isInvitationOpen ? <StartedComponent openInvitation={openInvitation} name={name} /> : generateInvitation()}
    </div>
  )
}

export default InvitationPage;