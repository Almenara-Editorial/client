import { Container } from './styles'

import * as React from 'react'

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={150}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 37.917c.417-2.084.417-7.084 0-9.584.417 0 .833 2.084.833 4.584v6.25c0 .833-1.31 1.132-.833-1.25z"
        fill="currentColor"
      />
      <path
        d="M14.142 44.232c-6.367.516-12.015-3.676-14.06-5.852a.082.082 0 01-.02-.037c-.05-.206-.113-.617.006-.778.122-.166 2.619 1.85 3.852 2.88 1.233 1.029 5.336 3.557 15.256 2.638 16.986-3 17.97-.383 21.725 1.15 3.753 1.532 3.381 2.003 2.254 3.284-1.127 1.28-4.958-2.486-7.365-4.434-2.408-1.949-13.67.504-21.648 1.15zM25.02 27.384c3.08-1.163 5.08-.82 5.745-.483a.076.076 0 01.042.075c-.024.247-.226.61-.897.41a.1.1 0 00-.017-.002c-3.704-.359-5.237.953-9.305 1.85-4.432.635-9.368-1.85-10.452-2.31-.81-.46-.273-1.17.81-.448 4.75 2.802 10.178 1.948 14.074.908z"
        fill="currentColor"
      />
      <path
        d="M9.436 37.708c.314-5.852-.108-9.191-.38-10.233a.088.088 0 01.067-.11c.89-.172 1.018.11 1.167 2.822.153 2.802-.154 8.386-.154 9.141 0 .755-.602-.197-.7-1.62zM11.658 33.821c-.216-2.358.239-3.17.503-3.29a.071.071 0 01.023-.006c1.118-.099 1.52 1.2 1.51 2.497-.012 1.303-.58 1.139-.81.876-.23-.263.065-1.314-.209-2.09-.273-.778-.262.93-.284 1.641-.022.712-.635.821-.733.372zM25.02 27.384c3.08-1.163 5.08-.82 5.745-.483a.076.076 0 01.042.075c-.024.247-.226.61-.897.41a.1.1 0 00-.017-.002c-3.704-.359-5.237.953-9.305 1.85-4.432.635-9.368-1.85-10.452-2.31-.81-.46-.273-1.17.81-.448 4.75 2.802 10.178 1.948 14.074.908z"
        fill="currentColor"
      />
      <path
        d="M9.436 37.708c.314-5.852-.108-9.191-.38-10.233a.088.088 0 01.067-.11c.89-.172 1.018.11 1.167 2.822.153 2.802-.154 8.386-.154 9.141 0 .755-.602-.197-.7-1.62zM11.658 33.821c-.216-2.358.239-3.17.503-3.29a.071.071 0 01.023-.006c1.118-.099 1.52 1.2 1.51 2.497-.012 1.303-.58 1.139-.81.876-.23-.263.065-1.314-.209-2.09-.273-.778-.262.93-.284 1.641-.022.712-.635.821-.733.372zM15.03 33.828c-.216-2.359.24-3.171.504-3.29a.07.07 0 01.023-.006c1.118-.1 1.52 1.199 1.509 2.497-.011 1.302-.58 1.138-.81.875-.23-.262.066-1.313-.208-2.09-.274-.778-.263.93-.285 1.642-.021.711-.634.82-.733.372zM18.73 33.828c-.217-2.359.238-3.171.503-3.29a.07.07 0 01.023-.006c1.118-.1 1.52 1.199 1.509 2.497-.011 1.302-.58 1.138-.81.875-.23-.262.066-1.313-.208-2.09-.274-.778-.263.93-.285 1.642-.021.711-.634.82-.733.372zM21.866 33.785c-.161-2.363.313-3.165.58-3.278a.069.069 0 01.023-.006c1.12-.072 1.491 1.235 1.45 2.532-.041 1.302-.606 1.125-.83.857-.223-.268.097-1.312-.159-2.095-.255-.784-.284.924-.323 1.635-.038.71-.654.806-.741.355zM24.842 33.325c-.16-2.363.314-3.165.58-3.278a.074.074 0 01.024-.005c1.118-.074 1.293 1.08 1.293 2.378 0 2.047-.236 2.173-.46 1.905-.224-.268-.022-2.211-.35-3.219-.255-.783-.457 1.282-.495 1.993-.039.71-.504.677-.592.226zM29.54 32.8c.16-2.363-.314-3.164-.581-3.278a.069.069 0 00-.024-.005c-1.118-.074-1.292 1.08-1.292 2.378 0 2.048.448 1.384.672 1.116.223-.268-.19-1.422.138-2.43.255-.783.456 1.282.495 1.993.038.711.503.677.591.226zM23.072 11.697c-1.242-.569-1.35-1.182-1.234-1.471.015-.038.058-.053.096-.042.171.052.502.158 1.13.566l.017.009c4.984 1.974 6.941 8.296 7.27 10.91.328 2.617-.92 1.96-.953 1.643-.142-8.254-4.651-10.849-6.326-11.615z"
        fill="currentColor"
      />
      <path
        d="M19.756 9.89c-.12-.372 1.953-6.643 3.04-9.834.018-.054.083-.074.126-.036.568.504-.078 1.52.172 5.207.263 3.864-.262 4.116-.777 3.974-.349-.097-.23-2.656-.08-4.502.008-.106-.145-.135-.174-.033-.56 1.963-1.309 4.825-1.136 5.224.252.58.372.712.515 1.39.138.662.235.71-.113 1.076a.089.089 0 01-.073.026c-2.22-.224-2.847-.085-4.761 1.242-6.337 4.98-5.844 9.316-5.943 10.651-.098 1.336 4.892 2.212 6.95 2.354 2.057.142 10.08-1.872 11.754-2.354 1.674-.481 1.871.68 1.007.767-.865.087-12.181 2.31-13.768 2.353-1.256.035-4.856-1.17-6.554-1.796a.086.086 0 01-.056-.082v-1.91c-.066-1.12.464-4.203 3.108-7.575 2.6-3.315 6.103-4.531 7.607-4.741a.087.087 0 00.076-.088v-.537a.09.09 0 00-.061-.085c-.272-.097-.745-.342-.859-.69zM77.826 45.415c-.788 0-1.428-.258-1.922-.773-.494-.52-.741-1.212-.741-2.078v-.183c0-.576.109-1.09.327-1.54.222-.455.53-.81.924-1.064a2.323 2.323 0 011.288-.386c.755 0 1.342.248 1.761.746.419.498.628 1.21.628 2.137v.413h-3.935c.014.573.18 1.037.5 1.39.321.352.73.527 1.223.527.351 0 .648-.072.891-.215a2.24 2.24 0 00.64-.569l.606.473c-.487.748-1.217 1.122-2.19 1.122zm-.124-5.208c-.4 0-.737.147-1.01.44-.271.29-.44.698-.504 1.224h2.91v-.075c-.029-.505-.165-.895-.408-1.17-.243-.28-.573-.42-.988-.42zM83.532 42.354c0-.89.212-1.607.634-2.147.422-.544.975-.816 1.659-.816.68 0 1.218.232 1.616.698V37.06h.993v8.246h-.913l-.048-.623c-.397.487-.95.73-1.659.73-.673 0-1.222-.275-1.648-.826-.422-.551-.633-1.27-.633-2.158v-.076zm.994.113c0 .659.136 1.174.408 1.546.272.373.648.559 1.127.559.63 0 1.09-.283 1.38-.849v-2.668c-.297-.547-.754-.821-1.37-.821-.486 0-.865.188-1.137.563-.272.376-.408.933-.408 1.67zM93.588 45.307h-.993v-5.809h.993v5.81zm-1.074-7.35a.6.6 0 01.145-.408c.1-.11.247-.166.44-.166.194 0 .34.055.44.166.1.111.151.247.151.408 0 .161-.05.295-.15.403-.1.107-.247.161-.44.161-.194 0-.34-.054-.44-.161a.58.58 0 01-.146-.403zM99.059 38.092v1.406h1.084v.768h-1.084v3.602c0 .233.048.408.145.527.096.114.26.171.494.171.114 0 .272-.021.472-.064v.805a2.879 2.879 0 01-.762.108c-.444 0-.779-.134-1.004-.403-.226-.268-.338-.65-.338-1.144v-3.602h-1.058v-.768h1.058v-1.406h.993zM103.466 42.349c0-.57.111-1.08.333-1.535.226-.455.537-.806.934-1.053.401-.247.858-.37 1.369-.37.791 0 1.43.274 1.917.821.49.548.735 1.276.735 2.185v.07c0 .566-.109 1.074-.327 1.525a2.445 2.445 0 01-.929 1.047c-.401.25-.862.376-1.385.376-.787 0-1.426-.274-1.916-.822-.487-.547-.731-1.272-.731-2.174v-.07zm.999.118c0 .644.149 1.162.446 1.552.3.39.701.585 1.202.585.505 0 .906-.197 1.203-.59.297-.398.445-.953.445-1.665 0-.637-.152-1.152-.456-1.546a1.434 1.434 0 00-1.203-.596c-.49 0-.885.195-1.186.585-.301.39-.451.948-.451 1.675zM115.336 40.39a2.965 2.965 0 00-.488-.038c-.651 0-1.093.277-1.326.832v4.123h-.993v-5.809h.966l.016.671c.326-.519.788-.778 1.385-.778.194 0 .34.025.44.075v.923zM119.862 45.307h-.993v-5.809h.993v5.81zm-1.073-7.35c0-.16.048-.297.145-.408.1-.11.247-.166.44-.166s.34.055.44.166c.1.111.15.247.15.408 0 .161-.05.295-.15.403-.1.107-.247.161-.44.161s-.34-.054-.44-.161a.578.578 0 01-.145-.403zM127.572 45.307c-.058-.114-.104-.318-.14-.612-.462.48-1.013.72-1.653.72-.573 0-1.044-.161-1.412-.483a1.584 1.584 0 01-.548-1.235c0-.605.229-1.074.687-1.407.462-.337 1.11-.505 1.944-.505h.966v-.456c0-.347-.104-.623-.311-.827-.208-.208-.514-.311-.918-.311-.355 0-.652.09-.892.268-.239.18-.359.396-.359.65h-.999c0-.29.102-.57.306-.838.208-.272.487-.486.838-.644a2.833 2.833 0 011.165-.236c.669 0 1.193.168 1.573.504.379.333.576.793.59 1.38v2.674c0 .533.068.957.204 1.272v.086h-1.041zm-1.648-.757c.311 0 .606-.08.885-.241.28-.161.482-.37.607-.628v-1.192h-.778c-1.217 0-1.826.356-1.826 1.068 0 .311.104.555.312.73.207.176.474.263.8.263zM133.574 45.307h-.993v-8.246h.993v8.246zM74.006 27.25l-2.217-.026.106 4.75-3.272 1.451.633-1.636-.026-4.645-6.413-.131-3.905 5.515c-1.284 1.794-2.621 3.15-4.01 4.064-1.566 1.02-3.246 1.53-5.04 1.53-.845 0-1.505-.237-1.98-.712-.528-.545-.791-1.355-.791-2.428 0-1.636.43-2.982 1.292-4.037.616-.757 1.434-1.337 2.454-1.742.616-.246 1.056-.37 1.32-.37a.72.72 0 01.026.159c.035.158.035.273 0 .343a7.856 7.856 0 00-1.557 2.137c-.51 1.003-.765 1.848-.765 2.534 0 .756.176 1.372.528 1.847.37.493.888.774 1.557.844 1.108.088 2.419-.475 3.931-1.688 1.25-1.003 2.287-2.12 3.114-3.352l3.14-4.644-5.937-.132 2.164-.871h4.327l7.02-10.978c.14-.211.28-.431.422-.66.176-.229.343-.343.501-.343.317 0 .475.07.475.211l.58 11.77h2.323v1.24zm-4.882-1.24v-.29-.423-.554c0-1.354-.018-2.41-.053-3.167a19.027 19.027 0 00-.237-2.507c-.053-.21-.203-.281-.449-.21a.8.8 0 00-.422.29c-.088.14-.167.264-.238.369l-4.327 6.492h5.726zM78.759 15.137l-1.768 16.15c-.264.265-.466.458-.607.581-.422.387-.695.572-.818.554h-.264c-.07-.052-.114-.184-.132-.395a8.648 8.648 0 01-.026-.713v-.396-.053l1.372-11.69c.035-.211.053-.413.053-.607v-.475c0-.774-.115-1.328-.343-1.663a.897.897 0 00-.185-.184l2.375-1.109h.343zM96.747 32.422l-1.874 1.557-.66-3.245c-.105-.458-.237-.801-.395-1.03a1.082 1.082 0 00-.924-.475c-.598 0-1.003.106-1.214.317l-3.113 2.876-.897-2.56c-.141-.44-.3-.73-.475-.87a.843.843 0 00-.581-.211c-.282 0-.537.061-.765.184-.123.07-.335.247-.634.528l-3.192 2.93-1.003-3.247a1.367 1.367 0 00-.713-.844 1.762 1.762 0 00-.475-.132l1.98-1.61a1.55 1.55 0 01.369-.052c.193 0 .352.061.475.184.193.194.352.502.475.924l.765 2.639 2.639-2.349c.563-.51 1.187-.765 1.873-.765.598 0 .977.299 1.135.897l.633 2.375 2.085-1.82c.721-.634 1.478-.95 2.27-.95.527 0 .914.114 1.16.342.264.212.431.528.502.95l.554 3.457zM103.489 26.3c0 .317-.035.51-.105.58-.546.564-.959.986-1.24 1.267-.88.88-1.373 1.329-1.478 1.346l-.053-.316 1.003-1.109c.105-.123.158-.317.158-.58 0-.282-.176-.449-.528-.502a4.773 4.773 0 00-.923-.105h-.264c-.07.158-.123.29-.158.395-.106.317-.159.581-.159.792 0 .598.185 1.188.554 1.768.44.704 1.003 1.056 1.689 1.056.282 0 .484-.018.607-.053s.229-.07.317-.105v.131l-1.953 1.531a4.11 4.11 0 01-.501.026 8.843 8.843 0 01-.766.027c-.404 0-.809-.264-1.213-.792-.387-.545-.58-1.038-.58-1.478 0-.316.114-.765.342-1.345.229-.599.414-.968.554-1.109l2.217-2.006c.07-.035.237-.052.501-.052.475 0 .924.052 1.346.158.422.106.633.264.633.475zM115.622 32.29l-2.032.95-.58-3.166c-.088-.44-.247-.792-.475-1.056-.282-.317-.616-.475-1.003-.475-.229 0-.466.062-.713.185-.246.105-.431.22-.554.343l-3.166 3.351c-.053-.914-.123-1.592-.211-2.032-.299-1.354-.836-2.032-1.61-2.032l-.422.027 1.451-1.452c.088-.052.15-.087.185-.105.317-.159.563-.238.739-.238.281 0 .563.123.844.37.299.246.493.501.581.765l.686 1.821 2.111-1.9c.246-.229.51-.378.791-.449.282-.088.634-.132 1.056-.132.651 0 1.143.211 1.477.634.352.422.555.958.607 1.61l.238 2.982zM127.71 30.575l-1.821 1.847c-.053-.175-.343-.615-.871-1.32a19.666 19.666 0 00-.765-1.002l-.369-.026-3.589 2.348a3.184 3.184 0 01-1.003.423 4.76 4.76 0 01-1.108.132c-.51 0-.897-.185-1.161-.555-.088-.123-.176-.316-.264-.58l5.489-5.172c.176-.159.369-.282.58-.37.211-.105.44-.158.686-.158.299 0 .528.026.686.079a.663.663 0 01.396.264l3.114 4.09zm-4.275-1.055c0-.335-.079-.634-.237-.898-.229-.37-.554-.554-.977-.554-.738 0-1.389.308-1.952.924-.458.51-.686.941-.686 1.293 0 .246.105.484.316.712.229.212.493.317.792.317.457 0 1.029-.22 1.715-.66.686-.44 1.029-.818 1.029-1.134zM137.813 27.699a8.007 8.007 0 01-.66.607c-.545.422-.994.633-1.346.633-.246 0-.677-.14-1.293-.422-.211-.088-.51-.238-.897-.449l-.211-.343.238-.105c.387-.23.686-.396.897-.502.686-.352 1.134-.528 1.345-.528.511 0 .986.185 1.425.555.141.123.308.307.502.554zm-4.196 4.09l-2.164.633-.765-3.166c-.176-.74-.501-1.276-.976-1.61-.141-.106-.352-.202-.633-.29l1.609-.898c.106-.052.299-.079.581-.079.563 0 .985.238 1.266.713.176.299.335.809.475 1.53l.607 3.167zM150 30.575l-1.821 1.847c-.052-.175-.343-.615-.871-1.32a19.666 19.666 0 00-.765-1.002l-.369-.026-3.589 2.348a3.184 3.184 0 01-1.003.423 4.76 4.76 0 01-1.108.132c-.51 0-.897-.185-1.161-.555-.088-.123-.176-.316-.264-.58l5.489-5.172c.176-.159.369-.282.58-.37.211-.105.44-.158.686-.158.299 0 .528.026.686.079a.663.663 0 01.396.264l3.114 4.09zm-4.275-1.055c0-.335-.079-.634-.237-.898-.229-.37-.554-.554-.977-.554-.738 0-1.389.308-1.952.924-.458.51-.686.941-.686 1.293 0 .246.105.484.316.712.229.212.493.317.792.317.457 0 1.029-.22 1.715-.66.686-.44 1.029-.818 1.029-1.134z"
        fill="currentColor"
      />
    </svg>
  )
}
