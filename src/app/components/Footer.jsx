"use client";
import Image from "next/image";
import SHARKTANKLOGO from "../../../public/footerLogo.svg";
import LOGO from "../../../public/logo.svg";
import PLAYSTORE from "../../../public/android.png";
import IOS from "../../../public/ios.png";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#fff5e0] py-20 sm:bg-[#fff5e0]">
        <div className="w-[90%] sm:w-[85%] lg:px-10 lg:pr-20 m-auto flex flex-col gap-10 sm:flex-row justify-between items-center">
          <div>
            <Image src={LOGO} alt={LOGO} width={200} />
            <div className="mt-14 mb-7 tracking-wider">
              <p>B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi</p>
              <p>School, Nagpur, Maharashtra, 440014</p>
              <p>Email : founders@getplus.in | Phone : +91-9035202565</p>
            </div>
            <div className="flex gap-5">
              <Link
                href={"https://www.facebook.com/PlusGold.in"}
                target="_blank"
              >
                <FaFacebookSquare size={25} />
              </Link>
              <Link
                href={"https://www.instagram.com/plusgold.in/"}
                target="_blank"
              >
                <FaInstagram size={25} />
              </Link>
              <Link
                href={
                  "https://x.com/i/flow/login?redirect_after_login=%2Fplusgoldin"
                }
                target="_blank"
              >
                <FaTwitterSquare size={25} />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/plusgoldin/"}
                target="_blank"
              >
                <FaLinkedin size={25} />
              </Link>
              <Link
                href={"https://www.youtube.com/@Plus-App/featured"}
                target="_blank"
              >
                <FaYoutube size={25} />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[#A91D3A] font-semibold text-xl mb-5">Plus</p>

            <div className="flex gap-20">
              <div className="flex flex-col gap-4">
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className="flex flex-col gap-4">
                <p>FAQs</p>
                <p>Blogs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border mt-5 sm:mt-8 w-[95%] sm:w-[82%] m-auto"></div>
        <div className="w-[90%] sm:w-[82%] m-auto mt-5 flex justify-between items-center sm:px-5">
          <div className="w-[30%]">
            © FinShakti Solutions Pvt. Ltd.
          </div>
          <div className="flex gap-5 sm:gap-10">
            <Link
              href="https://play.google.com/store/apps/details?id=com.fs.getplus"
              target="_blank"
            >
              <Image className="w-[150px]" src={PLAYSTORE} alt={PLAYSTORE} />
            </Link>
            <Link
              href="https://apps.apple.com/in/app/plus-gold-save-for-jewellery/id6443759619?platform=iphone"
              target="_blank"
            >
              <Image className="w-[150px]" src={IOS} alt={IOS} />
            </Link>
          </div>
        </div>
        <div className='w-[95%] sm:w-[90%] lg:w-[82%] m-auto mt-10 text-start'>
            <div>
                <p className='text-2xl mb-2'>What is a Gold Savings Scheme?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        A gold savings scheme or gold investment scheme is a financial instrument that enables individuals to invest in gold systematically over a period of time. At Plus Gold, India’s first jewellery savings app, we offer various gold schemes to cater to the diverse needs of gold investors and buyers with varying budgets.
                    </p>
                    <p className='mb-3'>
                        These schemes work on the principle of accumulating gold gradually, making them accessible to all seeking to invest in gold. PlusGold allows investors to choose from different schemes like the golden bonanza scheme, wedding saving scheme, anniversary gift scheme, gold monthly scheme, and many other gold savings schemes, each tailored to suit their preferences and financial goals.
                    </p>
                    <p className='mb-3'>
                        These schemes often offer flexibility in terms of payment frequencies and duration, allowing investors to choose the most suitable plan according to their financial capabilities. By choosing in a gold savings scheme, individuals can diversify their investment portfolio, hedge against inflation, and accumulate gold in a disciplined manner, thereby fostering long-term financial security,
                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Features of Gold Investment Scheme</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        Gold investment schemes offered by PlusGold offer various features, including flexible investment options, assured returns, and the convenience of online transactions. Some other features of opting for PlusGolds gold investment plans include:
                    </p>
                    <ul className='mb-3 list-disc'>
                        <li className='ml-8 mb-1'>0 Lock-in period: Investing in gold schemes with PlusGold comes with no lock-in period, meaning you can withdraw it anytime you want.</li>
                        <li className='ml-8 mb-1'>Safe & Secure: With PlusGold’s gold investment schemes, your gold is 100% secured in regulated vaults.</li>
                        <li className='ml-8 mb-1'>Instant Withdrawal: Our gold investment schemes allow for instant cash withdrawal into your account.</li>
                        <li className='ml-8 mb-1'>Flexibility of one-time or SIP: If you opt for our golden bonanza scheme, it gives you the flexibility to buy gold through one-time or SIP. Plus, you get 10% extra gold, meaning you get 1gm extra gold on the purchase of every 10gm.</li>
                    </ul>
                    <p className='mb-3'>
                        Our gold investment plans are designed to cater to the diverse needs of investors, ensuring maximum benefits.
                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Why Invest in Gold?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        Investing in gold brings several benefits to the table. Here is why you should invest in gold:</p>
                    <p className='mb-1'>
                        Gold holds its value over time:
                    </p>
                    <p className='mb-3'>
                        Gold is a smart investment because it helps protect your money from losing value when prices go up. While the value of currency goes down as prices of commodities rise, gold’s worth tends to stay steady or even increase, protecting your investment in the long run. That is why investors consider gold as one of the most trusted assets for investment. By investing your hard earned money in gold, you can preserve wealth, ensuring a brighter and more financially secure future.                    </p>
                </div>

                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-1'>
                        Universal appeal:
                    </p>
                    <p className='mb-3'>
                        Gold holds universal appeal due to its recognized value across the globe, which distinguishes it from other assets. Its widespread acceptance as a form of investment ensures seamless conversion to cash in different parts of the world. This attribute makes gold a preferred choice for investors seeking liquidity and stability in their portfolios. Additionally, its enduring status as a symbol of wealth and security further solidifies its universal value.
                    </p>
                </div>

                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-1'>
                        Higher liquidity than real estate:
                    </p>
                    <p className='mb-3'>
                        While real estate properties appreciate in value over time, selling them at desirable prices may take time, from months to years. But that is not the case with gold even in its physical form. Gold investments provide faster liquidity compared to other physical assets. Additionally, investment in gold comes with no lock-in period except for sovereign gold bonds (SGBs). That means investors can resell gold with ease anytime they need cash.                    </p>
                </div>

                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-1'>
                        Easy to Invest:
                    </p>
                    <p className='mb-3'>
                        Buying gold is like investing your money in something solid like coins or jewellery. While assets stored digitally are susceptible to hacking and other misuse, gold remains safe from such concerns. Plus, investing in gold is easy, and it gives you a sense of security. These attributes make gold a safer and more secure investment.                    </p>
                </div>

                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-1'>
                        Gold gives stable returns:
                    </p>
                    <p className='mb-3'>
                        Gold is a great addition to your investments because it tends to move independently from stocks and bonds. This means that when other investments are doing poorly, gold can help balance out your portfolio and reduce overall risk. By including gold in your investment mix, you can potentially improve your chances of seeing stable returns over time.                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>How to Invest in Gold Scheme?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        A gold scheme is more or less similar to a monthly investment plan, but it allows investors to buy gold on their investments instead of getting interest. It offers a safe avenue for portfolio diversification and hedge against inflation. Individuals seeking to invest in gold may use the PlusGold app. PlusGold is a hassle-free platform that enables Indian households to invest in gold with convenience and transparency.                    </p>
                    <p className='mb-3'>
                        To begin investing, simply sign up on our app, choose from our range of gold investment schemes tailored to suit your future gold purchase and financial goals, deposit your funds, and watch your investment grow.                    </p>
                    <p className='mb-3'>
                        Whether you prefer traditional gold purchase plans or digital gold options, we offer flexible solutions to cater to your preferences. With competitive pricing, secure transactions, instant withdrawal, and many more benefits, PlusGold ensures a seamless investment experience.                    </p>
                    <p className='mb-3 '>
                        Start building your wealth today with our trusted gold investment schemes and unlock the potential of this timeless asset. Leverage PlusGold for your gold investment needs and embark on a journey towards financial security and prosperity.                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>How Plus Gold Works?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        PlusGold is a revolutionary app that makes investing in gold hassle-free and rewarding. The app helps Indian households pre-plan their jewellery purchase by saving monthly and gaining 10% extra gold. It provides a user-friendly platform where investors can start saving in gold effortlessly.                    </p>
                    <p className='mb-3'>
                        The app operates by offering some of the best gold-saving schemes, allowing for easy accessibility to pure gold both in physical and digital forms without the hassle of visiting physical stores.                    </p>
                    <p className='mb-3'>
                        Users can deposit a fixed amount daily, weekly, or monthly, which is then converted into gold and can be redeemed anytime in the form of jewellery, gold coins, or cash at our 300+ trusted jewellery partners.  Additionally, PlusGold offers the advantage of earning an extra 10% gold on every deposit, enhancing the value of the savings.                    </p>
                    <p className='mb-3'>
                        This innovative approach allows individuals to accumulate gold systematically, ensuring they are better prepared for future jewellery purchases or financial security.
                    </p>
                    <p className='mb-3'>
                        By leveraging technology, PlusGold provides a transparent and convenient platform for individuals to invest in gold, catering to the diverse needs of Indian households. With transparent processes and dedicated customer support, we strive to make your investment journey seamless.                    </p>
                </div>
            </div>

            <div className='text-3xl mt-8 mb-3 font-semibold'>
                FAQ
            </div>

            <div>
                <p className='text-2xl mb-2'>Q : Why invest in gold with Plus Gold?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        Investing in gold with PlusGold offers reliability, transparency, and competitive returns. With our secure platform and lucrative gold schemes, you can build a robust gold investment portfolio with ease.
                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Q : How do I start a gold savings scheme with Plus Gold?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        Starting a gold savings scheme with PlusGold is easy. Simply sign up on our platform, choose a suitable scheme, and initiate your contributions. Our team will guide you through the process every step of the way.                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Q : Which gold scheme is the best?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        The best gold scheme depends on your investment goals and risk appetite. At PlusGold, we offer a range of schemes tailored to different preferences, ensuring theres an ideal option for every investor.                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Q : What is the 11-month gold scheme?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        The 10-month gold scheme is a popular investment option offered by PlusGold, allowing investors to deposit funds for the duration of 10 months and earn attractive returns on their investment in gold.                    </p>
                </div>
            </div>

            <div>
                <p className='text-2xl mb-2'>Q : How to invest in gold for good returns?</p>
                <div className='text-sm tracking-wider leading-6'>
                    <p className='mb-3 '>
                        Investing in gold for good returns involves choosing the right investment vehicle, understanding market trends, and staying updated with economic indicators. PlusGold provides the necessary tools and expertise to maximize your returns from gold investments.                    </p>
                </div>
            </div>

        </div>
      </div>
      <div className="p-5">
        <Image
          className="block m-auto"
          src={SHARKTANKLOGO}
          alt={SHARKTANKLOGO}
        />
      </div>
    </div>
  );
};

export default Footer;
