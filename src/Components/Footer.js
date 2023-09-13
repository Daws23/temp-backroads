import { pageLinks, socialLinks } from "../data"

export const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map(({id, href, text})=>{
            return (
                <li key={id}>
                    <a href={href} class="footer-link">{text}</a>
                </li>
            )
        })}
        <li>
          <a href="#featured" class="footer-link">featured</a>
        </li>
      </ul>
      <ul class="footer-icons">
        {socialLinks.map(({id, href, icon})=>{
            return (
                <li key={id}>
                    <a href={href} target="_blank" class="footer-icon" rel="noreferrer">
                        <i class={icon}></i>
                    </a>
                </li>
            )
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{(new Date).getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
