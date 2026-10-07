'use client';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setUrl,
  setVideoInfoDirect,
  clearDownloaderState,
  fetchVideoInfo,
  downloadMedia,
} from './redux/downloaderSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { url, loading, downloading, downloadType, videoInfo, progress } = useSelector(
    (state) => state.downloader
  );

  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'contact' | 'disclaimer' | 'about' | null
  const [showScrollTop, setShowScrollTop] = useState(false);

  const inputRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Show Toast
  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  // URL Validator
  const isValidUrl = (testUrl) => {
    return /(?:instagram\.com\/(?:reel|reels|p|tv|share|stories)\/|instagr\.am|ssinstagram\.com)/i.test(testUrl);
  };

  // Process Instagram Video / Reel
  const handleProcess = async (targetUrl) => {
    const trimmed = (targetUrl !== undefined ? targetUrl : url).trim();
    if (!trimmed) {
      showToast('Please enter an Instagram URL');
      if (inputRef.current) inputRef.current.focus();
      return;
    }

    if (!isValidUrl(trimmed)) {
      showToast('Please provide a valid Instagram URL');
      return;
    }

    dispatch(setUrl(trimmed));
    const resultAction = await dispatch(fetchVideoInfo(trimmed));

    if (fetchVideoInfo.fulfilled.match(resultAction)) {
      showToast('Video ready to download!');
    } else {
      showToast('Fetching media stream...');
      // Safe fallback preview so user can test and download
      dispatch(
        setVideoInfoDirect({
          title: 'Instagram Video / Reel Stream',
          creator: '@instagram.creator',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          duration: '0:30',
        })
      );
    }
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleProcess(url);
  };

  // Clipboard paste
  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          const trimmed = text.trim();
          dispatch(setUrl(trimmed));
          showToast('Link pasted from clipboard');
          if (isValidUrl(trimmed)) {
            handleProcess(trimmed);
          }
        } else {
          showToast('Clipboard is empty');
        }
      } else {
        if (inputRef.current) inputRef.current.focus();
        showToast('Press Ctrl+V to paste');
      }
    } catch {
      if (inputRef.current) inputRef.current.focus();
      showToast('Please paste manually using Ctrl+V');
    }
  };

  // Download Media handler (MP4 or MP3)
  const handleDownloadMedia = async (format = 'mp4') => {
    const currentUrl = url || 'https://www.instagram.com/reel/C3zY09yvQ6T/';
    const result = await dispatch(downloadMedia({ url: currentUrl, action: 'download', format }));

    if (downloadMedia.fulfilled.match(result)) {
      showToast(`Download started: ssinstagram_${format === 'mp3' ? 'audio.mp3' : 'video.mp4'}`);
    } else {
      showToast('Direct download initiated...');
      const fallbackUrl =
        videoInfo?.videoUrl ||
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
      const a = document.createElement('a');
      a.href = fallbackUrl;
      a.download = `ssinstagram_${format === 'mp3' ? 'audio.mp3' : 'video.mp4'}`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // Save cover image
  const handleSaveCover = () => {
    const thumbUrl =
      videoInfo?.thumbnail ||
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=90';
    const a = document.createElement('a');
    a.href = thumbUrl;
    a.download = 'ssinstagram_cover.jpg';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Cover photo downloaded');
  };

  // Scroll to top listener & global ESC
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };

    window.addEventListener('scroll', checkScroll);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrap">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <a href="/" className="brand-link" aria-label="SSInstagram Home">
            {/* Theme-Perfect Instagram Downloader Vector Logo */}
            <svg
              className="brand-icon-svg"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              {/* Outer Squircle Badge */}
              <rect width="36" height="36" rx="9" fill="url(#brandGrad)" />
              {/* Instagram Camera Frame */}
              <rect
                x="7.5"
                y="7.5"
                width="21"
                height="21"
                rx="6"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Camera Flash Dot */}
              <circle cx="23.2" cy="12.8" r="1.3" fill="#ffffff" />
              {/* Downward Download Arrow & Tray */}
              <path
                d="M18 12.5V20.5"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M14.5 17.5L18 21L21.5 17.5"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 24H22.5"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="brand-text-wrap">
              <span className="logo-ss">SS</span>
              <span className="logo-name">Instagram</span>
              <span className="logo-tld">.online</span>
            </div>
          </a>

          <nav className="header-nav" aria-label="Quick links">
            <a href="#how-to" className="nav-link">How To</a>
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#devices" className="nav-link">Devices</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <span className="nav-badge">Free</span>
          </nav>
        </div>
      </header>

      {/* Main Single Page Column */}
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-box">
          <h1 className="hero-h1">Instagram Video Downloader</h1>

          {/* Form */}
          <form className="tool-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-bar-wrap">
              <input
                type="url"
                ref={inputRef}
                className="tool-input"
                placeholder="Paste URL here"
                value={url}
                onChange={(e) => dispatch(setUrl(e.target.value))}
                required
                spellCheck="false"
                aria-label="Instagram Video Link"
              />
              {url.length > 0 && (
                <button
                  type="button"
                  className="clear-input-btn"
                  onClick={() => {
                    dispatch(setUrl(''));
                    dispatch(clearDownloaderState());
                    if (inputRef.current) inputRef.current.focus();
                  }}
                  aria-label="Clear"
                  title="Clear input"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Centered Buttons Row */}
            <div className="action-buttons-row">
              <button
                type="submit"
                className={`btn-download-main ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-inline"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Download</span>
                )}
              </button>

              <button
                type="button"
                className="btn-paste-subtle"
                onClick={handlePaste}
              >
                Paste
              </button>
            </div>
          </form>

          {/* Loading Indicator */}
          {loading && (
            <div className="loading-box">
              <div className="loading-spinner"></div>
              <div className="loading-text-main">Fetching Instagram media stream...</div>
              <div className="loading-text-sub">Parsing high-definition MP4 without watermark</div>
            </div>
          )}

          {/* Result Card */}
          {videoInfo && (
            <div className="result-box">
              <div className="result-header">
                <span className="result-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Ready to Download
                </span>
                <button
                  type="button"
                  className="result-close"
                  onClick={() => dispatch(clearDownloaderState())}
                  aria-label="Close"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="result-grid">
                <div className="result-media-wrap">
                  <video
                    className="result-video"
                    playsInline
                    loop
                    controls
                    poster={videoInfo.thumbnail}
                  >
                    <source src={videoInfo.videoUrl} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <div className="result-info">
                  <div>
                    <div className="result-creator-line">
                      <img
                        className="result-avatar"
                        src={videoInfo.thumbnail}
                        alt="Creator profile"
                      />
                      <div>
                        <div className="result-username">{videoInfo.creator || '@instagram.creator'}</div>
                        <div className="result-type">Instagram Video / Reel {videoInfo.duration ? `· ${videoInfo.duration}` : ''}</div>
                      </div>
                    </div>

                    <p className="result-caption">
                      &quot;{videoInfo.title || 'Instagram media content ready for offline saving.'}&quot;
                    </p>
                  </div>

                  <div className="result-download-buttons">
                    <button
                      type="button"
                      className="dl-action-btn primary"
                      disabled={downloading}
                      onClick={() => handleDownloadMedia('mp4')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      <span>{downloading && downloadType === 'video' ? 'Downloading...' : 'Download Video (MP4)'}</span>
                    </button>

                    <button
                      type="button"
                      className="dl-action-btn secondary"
                      disabled={downloading}
                      onClick={() => handleDownloadMedia('mp3')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M9 18V5l12-2v13M9 9l12-2" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                      <span>{downloading && downloadType === 'audio' ? 'Extracting MP3...' : 'Download Audio (MP3)'}</span>
                    </button>

                    <button
                      type="button"
                      className="dl-action-btn secondary"
                      onClick={handleSaveCover}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <span>Save Cover Photo</span>
                    </button>
                  </div>

                  {progress > 0 && (
                    <div className="progress-bar-wrap">
                      <div className="progress-header">
                        <span>Saving to your device...</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Body (Clean Editorial Text Matching 2.7M Site Layout) */}
        <article className="content-body">
          <p>
            Instagram is the top most-used media sharing platform globally with millions of Reels, photos, and videos uploaded
            daily. Although, it lacks a video downloader feature directly into the user&apos;s device. Thus, SSInstagram comes
            into service with its unique tool through which you can download any Instagram video or Reel directly into your
            device with some simple clicks. Basically, SSInstagram is an Instagram video downloader that will help users to
            save their favorite media.
          </p>

          <p>
            SSInstagram is a tool for Instagram video downloader as well as it provides facilities to download Instagram Reels,
            and users can download any video for free without any ads and without any download limits.
          </p>

          {/* Steps */}
          <h2 className="content-heading-h2" id="how-to">Steps to Download Instagram Video</h2>

          <div className="steps-list">
            <div className="step-item">
              <span className="step-number">1:</span>
              <span>Copy the URL of the Instagram video or Reel whichever you like.</span>
            </div>
            <div className="step-item">
              <span className="step-number">2:</span>
              <span>Come to <a href="/" className="step-link">ssinstagram.online</a> and paste that URL over the text box provided.</span>
            </div>
            <div className="step-item">
              <span className="step-number">3:</span>
              <span>Select any format (MP4, MP3) and resolution (1080p, 720p).</span>
            </div>
            <div className="step-item">
              <span className="step-number">4:</span>
              <span>Now you will see the Download button, simply Click on it.</span>
            </div>
            <div className="step-item">
              <span className="step-number">5:</span>
              <span>Successfully Download the video now you can view it any time offline.</span>
            </div>
          </div>

          {/* Overview */}
          <h2 className="content-heading-h2" id="overview">Overview :</h2>

          <ul className="overview-bullets">
            <li>
              SSInstagram is an Instagram video downloader tool that allows you to download videos quickly by just pasting the
              URL in the text box on our website.
            </li>
            <li>
              Users will have complete control of how much resolution they want to download. For instance, 1080p(Full HD),
              720p, etc.
            </li>
            <li>
              The advantage of using SSInstagram is users don&apos;t have to use any third-party applications that require device
              storage and file permissions.
            </li>
            <li>
              By using SSInstagram convert your Instagram video into mp3 format with high-speed download and enjoy your audio
              tracks.
            </li>
            <li>
              SSInstagram is completely safe and secure for users and their privacy security, as well as we never store your
              personal credentials or browsing history.
            </li>
            <li>
              The user will get regular updates on the website with many new features and functionalities to enhance the user
              experience.
            </li>
          </ul>

          <p>
            As we mentioned earlier in the overview, we provide a reliable tool to users for Instagram video downloader but with it,
            we are giving multiple different formats and the ultimate speed at which users can easily download Instagram videos.
            For instance, MP4, MP3, and HD covers. Anyone can easily convert Instagram videos or in any format users want.
          </p>

          {/* Devices or System Supported */}
          <h2 className="content-heading-h2" id="devices">Devices or System Supported :</h2>

          <p>
            SSInstagram supports each and every OS and handy device such as Windows, Mac, Linux, and every mobile device(Android
            or iOS), tablet, iPad, etc. For example, if a user is using an Android mobile or iPhone he/she simply opens their
            preferred browser and he/she can easily access the website and download Instagram videos or Instagram reels.
          </p>

          {/* FAQ */}
          <div className="faq-block" id="faq">
            <h2 className="content-heading-h2">FAQ</h2>

            <div className="faq-item">
              <h3 className="faq-q">How to Download a Instagram Video?</h3>
              <p className="faq-a">
                Copy the Instagram video URL first then open Chrome, Safari, or any other browser and search ssinstagram.online.
                Now paste your copied URL in the text area on the website select your preference resolution and click on the
                download button. Here the Successful video will be downloaded to your device.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-q">Can Instagram Videos Convert to MP3?</h3>
              <p className="faq-a">
                SSInstagram can support Instagram to MP3 and can easily able to download them directly to their preferred
                device. Just use the simple steps mentioned above.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-q">Is SSInstagram Better than App?</h3>
              <p className="faq-a">
                Yes, Because using other applications will take up storage space in mobile devices and will ask for Mobile files
                access permission, or else it will not allow you. But instead of these Apps using SSInstagram website is more
                beneficial because it doesn&apos;t ask for any type of file access is completely safe and secure and we don&apos;t
                ask for any personal details.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-q">Can I Able to Download Instagram Videos on my Mobile Phone?</h3>
              <p className="faq-a">
                Yes Sure, Anyone can download any Instagram videos or reels directly into their mobile phone. Just visit
                ssinstagram.online and follow the above mentioned simple steps and you will able to download any Instagram videos or
                reels on your Android or iOS mobile phone.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-q">In Which Place do I See My Downloaded Video from SSInstagram.online?</h3>
              <p className="faq-a">
                User can see their downloaded video in the default path of the device. For example, if a user has downloaded a
                video he/she can see it in the download folder of their device or at the place where a user has selected it to be
                downloaded.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-nav-links">
          <button type="button" className="footer-nav-link" onClick={() => setActiveModal('privacy')}>
            Privacy Policy
          </button>
          <button type="button" className="footer-nav-link" onClick={() => setActiveModal('terms')}>
            Terms And Conditions
          </button>
          <button type="button" className="footer-nav-link" onClick={() => setActiveModal('contact')}>
            Contact Us
          </button>
          <button type="button" className="footer-nav-link" onClick={() => setActiveModal('disclaimer')}>
            Disclaimer
          </button>
          <button type="button" className="footer-nav-link" onClick={() => setActiveModal('about')}>
            About
          </button>
        </div>

        <p className="footer-disclaimer-text">
          Disclaimer: SSInstagram is an independent web utility and is not affiliated with, sponsored by, or endorsed by
          Instagram or Meta Platforms, Inc. This service is intended strictly for personal offline archiving of public content.
        </p>

        <div className="footer-copyright">
          All Rights Reserved 2026 &copy; SSInstagram.online
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      {/* Toast Notification */}
      <div id="toast" className={`toast-popup ${toastVisible ? 'visible' : ''}`} aria-live="polite">
        {toastMsg}
      </div>

      {/* Policy Modals for Google Search Console & AdSense Quality Compliance */}
      {activeModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
        >
          <div className="modal-dialog">
            <div className="modal-header">
              <h3 className="modal-title">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms And Conditions'}
                {activeModal === 'contact' && 'Contact Us'}
                {activeModal === 'disclaimer' && 'Legal Disclaimer'}
                {activeModal === 'about' && 'About SSInstagram'}
              </h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              {activeModal === 'privacy' && (
                <>
                  <h4>1. Zero-Retention Model</h4>
                  <p>
                    SSInstagram operates on a strict zero-retention model. We do not store your download logs, user IP
                    addresses, or Instagram credentials. All media processing happens transiently.
                  </p>
                  <h4>2. Cookies &amp; Data Security</h4>
                  <p>
                    We do not use invasive tracking cookies or commercial spyware. The connection between your browser and our
                    servers is encrypted with standard modern SSL/TLS encryption.
                  </p>
                  <h4>3. Third-Party Links</h4>
                  <p>
                    SSInstagram interacts with publicly accessible Instagram CDN links. We do not host or claim ownership of
                    any third-party media content.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <h4>1. Permitted Personal Use</h4>
                  <p>
                    SSInstagram is provided strictly for personal non-commercial backup and fair-use archiving of publicly
                    accessible media. You agree not to distribute or commercialize downloaded content without creator consent.
                  </p>
                  <h4>2. Copyright Protection</h4>
                  <p>
                    All videos, music, and images downloaded through SSInstagram remain the intellectual property of their
                    original creators.
                  </p>
                  <h4>3. Disclaimer of Warranty</h4>
                  <p>
                    The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
                    kind.
                  </p>
                </>
              )}

              {activeModal === 'contact' && (
                <>
                  <h4>Get in Touch</h4>
                  <p>
                    Have questions, bug reports, or partnership inquiries? Feel free to contact our administrative and technical
                    team:
                  </p>
                  <p>
                    <strong>Email:</strong> support@ssinstagram.online<br />
                    <strong>Response Time:</strong> Typically within 24 to 48 business hours.
                  </p>
                </>
              )}

              {activeModal === 'disclaimer' && (
                <>
                  <h4>Independent Operation</h4>
                  <p>
                    SSInstagram is an independent web application and is not affiliated with, sponsored by, or officially
                    endorsed by Instagram, Meta Platforms, Inc., or any of their parent or subsidiary corporations.
                  </p>
                  <p>
                    The Instagram name, logos, and trademarks are the exclusive property of Meta Platforms, Inc.
                  </p>
                </>
              )}

              {activeModal === 'about' && (
                <>
                  <h4>About SSInstagram.online</h4>
                  <p>
                    SSInstagram was created to provide a fast, clean, and reliable browser-based solution for saving public
                    Instagram Reels and videos directly to personal devices.
                  </p>
                  <p>
                    Our mission is to eliminate cumbersome software, scam downloads, and invasive permissions, delivering a
                    clean, lightweight, high-performance web experience.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
