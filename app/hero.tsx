// import Image from "next/image";

// export default function Hero() {
//   return (
//     <main id="main">
//       <div id="style">
//         <p>
//           <span className="high">H</span>i I&apos;m Ni
//           <span className="high">d</span>a N
//           <span className="high">o</span>man
//         </p>
//         <p>
//           a <span>F</span>ron<span className="high">t</span>ened{" "}
//         </p>
//         <p>
//           <span>D</span>evel<span className="high">o</span>per
//         </p>
//       </div>
//       <div id="picture">
//         <Image
//           src="/download (1).jpg"
//           alt="pic"
//           width={600}
//           height={600}
//           layout="intrinsic"
//         />
//       </div>
//     </main>
//   );
// }


import Image from "next/image";

export default function Hero() {
  return (
    <main id="main">
      <div className="style">
        <p>
          <span className="high">H</span>i I&apos;m Ni
          <span className="high">d</span>a N
          <span className="high">o</span>man
        </p>
        <p>
          a <span>F</span>ron<span className="high">t</span>ened{" "}
        </p>
        <p>
          <span>D</span>evel<span className="high">o</span>per
        </p>
      </div>
      <div id="picture">
        <Image
          id="pic"
          src="/download (1).jpg"
          alt="pic"
          width={600}
          height={600}
          layout="intrinsic"
        />
      </div>
    </main>
  );
}
