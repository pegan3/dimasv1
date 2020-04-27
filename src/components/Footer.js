import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import facebook from '../../content/thumbnails/facebook.png'
import instagram from '../../content/thumbnails/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          Build by Gatsby.Js - Theme by Tania
        </div>
        <div>
        <a href="https://facebook.com/sakithatiteam" title="facebook.com/sakithatiteam">
            <img
              src={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Facebook"
            />
          </a>
          <a href="https://instagram.com/dmasetiawan23" title="instagram/dmasetiawan23">
            <img
              src={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Instagram"
            />
          </a>
          <a href="https://github.com/pegan3" title="Theme on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Netlify"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Gatsby"
            />
          </a>
        </div>
      </footer>
    )
  }
}
