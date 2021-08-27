import GlobalStyles from "../src/styles/global"
import { CartContext } from "../src/contexts"
import * as nextImage from 'next/image';
import * as cartProviderValues from "./mock"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <CartContext.Provider value={cartProviderValues}>
      <GlobalStyles />
      <Story />
    </CartContext.Provider>
  ),
];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: ({objectFit, ...rest}) => <img style={{objectFit}} {...rest} />
});

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-portal');
document.body.append(modalRoot);
