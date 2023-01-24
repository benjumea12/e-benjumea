import React from "react"
// Framer motion
import { motion } from "framer-motion"
// Styled components
import { Main } from "./SVGArrow.styled"

const SVGArrow = () => {
  return (
    <Main>
      <motion.div>
        <svg className="svg-arrow" viewBox="0 0 237 40" fill="none">
          <path
            d="M4.87545 0.0335442L51.3556 3.96322L61.9209 16.0619C136.532 16.7112 112.456 17.3677 187.067 18.017C187.705 17.0286 187.309 16.3986 187.067 15.7134L177.696 0.0530694C196.209 9.48099 214.352 20.1624 235.887 19.3526C237.941 19.2637 236.801 22.9007 235.232 23.3983C215.066 26.0624 193.702 27.1986 180.689 38.9419C179.778 39.6359 177.625 36.1959 178.252 35.4962L184.107 26.4562C184.806 25.4514 183.836 25.2764 183.126 25.3141L61.6245 23.1848L47.2157 34.3343L3.66295 35.0118C-3.00179 34.6972 1.04197 29.8152 3.15598 28.6238L14.915 22.3133C13.6735 19.6417 13.5472 16.9709 15.2094 14.2993L2.97609 4.58201C1.86242 3.96439 2.3687 0.446041 4.87329 0.032959L4.87545 0.0335442ZM14.2307 3.76961C14.168 3.76081 14.1377 3.7832 14.1162 3.80787C14.0433 3.89416 14.439 4.20936 14.4597 4.23375C14.6234 4.42753 14.6614 5.33067 14.934 5.49193C15.2889 5.70197 15.6947 5.96653 15.9807 6.30491C16.0525 6.3899 15.9666 7.10707 15.9153 7.13736C15.7478 7.23637 15.186 6.95521 15.0322 7.13736C14.9944 7.18199 15.1798 7.60393 15.1957 7.67933C15.2318 7.85111 15.2087 8.29494 15.3102 8.41491C15.7977 8.99187 16.6238 9.05134 17.2891 9.57631C17.6061 9.82637 17.7774 10.2212 18.1231 10.4668C18.848 10.9815 19.7209 10.9201 20.4455 11.4347C20.6986 11.6145 20.8524 12.0791 21.1324 12.1896C22.1162 12.5777 23.2583 12.725 24.2071 13.0995C25.201 13.4915 26.5663 12.676 27.5108 13.2349C27.8604 13.4418 28.1318 13.8831 28.4757 14.0866C28.7373 14.2414 29.2074 14.43 29.2935 14.5319C29.5374 14.8205 30.358 13.3506 30.7491 13.2349C31.7069 12.9514 29.2698 9.53336 31.8612 11.0669C32.1774 11.254 32.4343 11.5639 32.7934 11.7057C33.0921 11.8235 33.6806 11.9996 33.9382 12.2283C34.1655 12.4301 34.5198 12.4356 34.7724 12.6349C36.6605 14.1247 37.3911 13.893 39.5317 13.893C40.1408 13.893 40.7092 13.7478 41.2816 14.0866C41.5488 14.2446 41.6885 14.5591 41.9195 14.7642C42.7868 15.534 43.9623 15.7901 45.0432 15.7901C45.2814 15.7901 45.9273 15.9244 46.1227 15.6933C46.2413 15.5529 43.9339 13.1221 43.4895 12.5961C41.9293 10.7493 38.6927 8.27827 36.5715 7.77611C35.6613 7.56064 34.7599 7.4041 33.8566 7.09863C32.2797 6.56536 30.9792 5.46128 29.4244 5.02737C29.4336 5.03521 29.4346 5.04566 29.4081 5.06562H29.3919C29.1874 5.2189 28.2643 5.66528 28.1652 5.70442C27.2168 6.07851 26.5251 5.62711 25.5811 5.62711C24.2477 5.62711 28.3752 7.33657 27.9362 8.37586C27.6739 8.99683 25.7945 8.87069 25.0905 8.6856C23.9496 8.38556 18.709 6.84289 18.2051 6.24649C17.8043 5.77204 16.727 4.91477 16.2262 4.71725C15.9807 4.62039 14.6697 3.8272 14.2309 3.76871L14.2307 3.76961ZM40.8073 5.33748C40.3127 5.30401 39.6242 5.43431 39.27 5.43431C38.9688 5.43431 38.4311 5.34304 38.2723 5.53108C37.9878 5.86787 38.6892 6.90847 38.9265 7.00218C39.7841 7.34056 40.3462 7.65846 41.1671 8.14432C41.341 8.24724 41.837 9.12983 41.9358 9.36387C42.1666 9.91015 42.9625 10.3058 43.2933 10.8931C43.8865 11.9462 46.1602 12.6798 46.9568 13.6225C47.334 14.0689 48.1402 12.1969 48.625 12.7707C48.7183 12.8811 49.6618 13.6149 49.9498 13.2741C50.1316 13.0588 51.0221 12.5034 51.2582 12.5965C52.7513 13.1856 57.9675 16.9282 59.3541 15.2872C60.0848 14.4224 57.3241 12.1599 56.9826 11.9577C56.4968 11.6702 56.0458 10.7389 55.5434 10.293C55.1373 9.93246 54.997 9.2534 54.5622 8.99609C53.7735 8.52936 52.8821 7.96716 52.1253 7.37007C51.9046 7.19582 51.7748 6.84315 51.5202 6.69249C50.0611 5.82896 46.7708 7.37443 49.5085 8.55079C49.3699 8.82437 48.9958 9.2216 48.8052 8.99609C48.0437 8.09479 42.6887 6.3055 41.2168 5.43436C41.1163 5.37457 40.9722 5.34865 40.8073 5.33748ZM20.0694 16.9716C20.0694 16.9716 20.5282 18.0726 20.1838 19.0235C20.159 19.092 22.0407 19.1427 24.8613 19.1977C24.8344 18.7703 24.8056 18.0486 24.6814 16.9909L20.0694 16.9716ZM35.3936 17.0489C35.2012 17.2964 34.9721 17.5372 34.6903 17.7457C34.3595 17.9937 34.0046 18.2041 33.66 18.4232C33.2395 18.7004 32.7854 18.8912 32.3189 19.0233C32.187 19.0536 32.056 19.0671 31.9264 19.1006H31.9101C31.9042 19.1006 31.9056 19.1165 31.8937 19.1198H31.8774C31.8668 19.1276 31.8618 19.1325 31.8447 19.1389C31.8087 19.15 31.7627 19.1572 31.7303 19.1771C31.6691 19.2058 31.5996 19.2481 31.4849 19.2933C36.6908 19.3498 43.6056 19.388 51.798 19.4288C51.7455 19.3929 51.6857 19.3715 51.6344 19.332C51.6186 19.3318 51.626 19.332 51.5527 19.332C51.1856 19.3399 50.8212 19.3057 50.4569 19.2547C50.4088 19.2468 50.3577 19.2436 50.3097 19.2356C49.0332 19.018 48.2933 18.1378 48.0037 17.1062L35.394 17.048L35.3936 17.0489ZM22.5387 22.0989C22.2475 22.3057 21.7881 22.1555 21.5738 22.4086C21.4018 22.6122 20.9466 22.9734 20.6252 23.1636C20.32 23.3442 19.3869 23.4235 19.2678 23.7056C18.9557 24.4444 17.2888 25.0644 17.2888 25.6607C17.2888 27.3326 19.1186 25.8567 19.6766 25.1961C19.8759 24.9603 21.0103 25.3809 21.1322 25.5252C21.2051 25.6114 21.1388 26.0322 21.3448 25.9511C22.1208 25.6449 21.6501 25.2026 22.0808 24.6929C22.7981 23.8438 24.7305 22.8282 22.5387 22.0989ZM39.0899 22.7765C37.1557 22.7191 34.2913 22.9506 33.0386 22.9506C31.9755 22.9506 27.5206 22.6739 26.7584 23.1249C26.2607 23.4194 25.9405 24.322 25.4664 24.7896C24.6308 25.6137 23.2149 26.0673 24.0435 27.5384C25.3842 29.9186 29.3042 27.433 30.7163 26.3187C31.0351 26.0672 32.4873 25.2902 32.6789 25.9703C33.0398 27.252 30.4939 29.056 30.8962 29.532C31.0434 29.7063 31.4844 29.087 31.6322 29.0288C32.118 28.8371 32.6124 28.8408 33.0713 29.203C33.4063 29.4673 33.8058 29.6483 34.2816 29.6483C35.782 29.6483 38.5566 27.1764 39.9077 26.3768C40.3817 26.0964 40.5789 25.3113 40.8563 24.9831C41.2496 24.5176 42.2522 24.363 42.4264 23.7248C42.0056 23.8078 41.1294 23.0992 40.6273 22.9505C40.2803 22.8479 39.7346 22.7957 39.0899 22.7765ZM56.083 23.0087C55.013 23.0215 52.8948 23.0845 52.8938 23.086C52.5847 23.4519 52.2895 24.3178 51.8634 24.6539C51.5604 24.8931 51.0337 25.0599 50.8003 25.4282C50.4793 25.9349 50.5338 26.6011 50.2933 27.1703C50.1333 27.5492 49.4219 28.2242 49.6064 28.6609C50.7097 31.2726 54.7025 26.6032 55.8049 25.9509C56.5273 25.5233 57.3884 24.9477 57.8984 24.3442C58.031 24.1873 57.9999 23.8994 57.9801 23.628C58.027 23.6392 58.0523 23.6392 58.0619 23.628C58.1456 23.529 57.9801 23.3615 57.9801 23.2215C57.9628 23.3329 57.9694 23.4801 57.9801 23.628C57.685 23.5594 56.7647 23.1186 56.6881 23.0279C56.679 23.0176 56.4396 23.0039 56.083 23.0087ZM47.6276 23.047C47.1259 23.0351 46.6682 23.1012 46.3356 23.2986C45.5547 23.7607 44.8587 24.4879 43.9478 24.8472C43.6171 24.9777 43.3403 26.1589 42.9665 26.4539C42.7543 26.6212 41.2622 28.0525 41.3147 28.1766C41.4572 28.5141 42.5577 28.3121 42.9174 28.3121C45.3482 28.3121 47.5352 26.3036 49.1976 24.8279C49.4651 24.5905 49.8817 24.6876 50.0318 24.4213C50.2082 24.108 49.9292 23.3125 49.95 23.3954C49.4027 23.2874 48.4639 23.067 47.6276 23.047Z"
            fill="black"
          />
        </svg>
      </motion.div>
    </Main>
  )
}

export default SVGArrow
