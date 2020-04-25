import React, { Component } from 'react'
import tania from '../../content/images/tania2020crop.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Dimas Setiawan" />
            </div>
            <div>
              <h3>Author</h3>
              <p>
                Hello, perkanalkan saya Dimas, saya adalah orang Gabut. Saya menulis ini untuk menghilangkan
                kegabutan saya selama lockdown. Web ini dibuat tanpa <strong>ads, sponsors, or bullshit.</strong>
                Jika kamu suka dengan konten saya, mohon dukung saya gabut terus!
              </p>

              <div className="flex">
                <a
                  href=""
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
