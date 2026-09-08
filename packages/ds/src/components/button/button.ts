import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.css?inline'

type ButtonVariant = 'primary' | 'secondary';

@customElement('exp-button')
export class ExpButton extends LitElement {
  @property()
  variant: ButtonVariant = 'primary';

  @property({ type: Boolean })
  disabled = false;

  static styles = unsafeCSS(styles)

  render() {
    return html`
      <button
        class=${this.variant}
        type="button"
        .disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }
}