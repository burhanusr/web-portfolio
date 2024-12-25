import { motion } from "framer-motion";
import cv from "./../assets/pdf/CV_ATS_BurhanuSultanRamadan.pdf";

export default function Social({ delay }) {
  return (
    <motion.div
      variants={{
        show: {
          transition: {
            staggerChildren: 0.25,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, scale: [0, 1.5, 1.2, 1] },
        }}
      >
        <a
          href="https://www.linkedin.com/in/burhanusr/"
          target="_blank"
          className="aspect-square cursor-pointer fill-sky-500 hover:!fill-sky-700"
        >
          <svg viewBox="0 0 14 14" className="size-7">
            <g clipPath="url(#clip0_156_4474)">
              <path d="M12.88 0H1.19612C0.557365 0 0 0.459377 0 1.09025V12.8004C0 13.4347 0.557365 14 1.19612 14H12.8765C13.5187 14 14 13.4312 14 12.8004V1.09025C14.0026 0.459377 13.5179 0 12.88 0ZM4.33912 11.6699H2.33362V5.43374H4.33912V11.6699ZM3.4055 4.48611H3.39149C2.74924 4.48611 2.33362 4.00838 2.33362 3.40988C2.33362 2.80088 2.76062 2.3345 3.41687 2.3345C4.07312 2.3345 4.47474 2.79738 4.48874 3.40988C4.48874 4.00838 4.07312 4.48611 3.4055 4.48611ZM11.669 11.6699H9.66349V8.26C9.66349 7.44275 9.37125 6.88536 8.64587 6.88536C8.09112 6.88536 7.76299 7.26075 7.61774 7.62562C7.56349 7.75687 7.54862 7.93536 7.54862 8.11824V11.6699H5.54312V5.43374H7.54862V6.30175C7.84087 5.88612 8.29675 5.28762 9.35725 5.28762C10.6741 5.28762 11.6699 6.15563 11.6699 8.02638L11.669 11.6699Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_156_4474">
                <rect width="14" height="14"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, scale: [0, 1.5, 1.2, 1] },
        }}
      >
        <a
          href="https://github.com/burhanusr"
          target="_blank"
          className="aspect-square cursor-pointer fill-slate-50 hover:!fill-slate-400"
        >
          <svg
            aria-hidden="true"
            viewBox="-1 -1 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </a>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, scale: [0, 1.5, 1.2, 1] },
        }}
      >
        <a
          href="mailto:bsultanrama@gmail.com"
          target="_blank"
          className="aspect-square cursor-pointer fill-red-500 hover:!fill-red-800"
        >
          <svg
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
          >
            <g clipPath="url(#clip0_156_4509)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.20017 2.20008C1.20017 2.08963 1.28971 2.00009 1.40017 2.00009H12.6C12.7104 2.00009 12.8 2.08963 12.8 2.20008V3.42924L7.00006 6.32919L1.20017 3.42924V2.20008ZM0.000192479 3.78706C1.69209e-05 3.79542 1.75207e-05 3.80378 0.000192479 3.81212V11.7999C0.000192479 12.5731 0.626982 13.1999 1.40017 13.1999H12.6C13.3731 13.1999 13.9999 12.5731 13.9999 11.7999V3.81212C14.0001 3.80378 14.0001 3.79542 13.9999 3.78706V2.20008C13.9999 1.4269 13.3731 0.80011 12.6 0.80011H1.40017C0.626982 0.80011 0.000192479 1.4269 0.000192479 2.20008V3.78706ZM12.8 4.77086V11.7999C12.8 11.9104 12.7104 11.9999 12.6 11.9999H1.40017C1.28971 11.9999 1.20017 11.9104 1.20017 11.7999V4.77086L6.73174 7.53664C6.90065 7.6211 7.09947 7.6211 7.26838 7.53664L12.8 4.77086Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_156_4509">
                <rect width="14" height="14"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, scale: [0, 1.5, 1.2, 1] },
        }}
      >
        <a
          href={cv}
          target="_blank"
          className="aspect-square cursor-pointer fill-yellow-500 hover:!fill-yellow-800"
        >
          <svg
            className="size-7"
            viewBox="100 120 800 750"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z"></path>
            <path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z"></path>
            <path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z"></path>
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
