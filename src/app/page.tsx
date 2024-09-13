import Header from "@/components/header";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  HandCoins,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
export default function Home() {
  return (
    <main className=''>
      <div className='min-h-screen flex flex-col'>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section id="home" className='relative bg-gray-100 py-20 lg:h-screen bg-[url(/hero.jpeg)] bg-no-repeat bg-[80%_center] lg:bg-center bg-cover'>
          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center h-full'>
            <div className='md:w-1/2 mb-8 md:mb-0 text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                <span className='flex justify-start items-center gap-4 mb-4 text-sm font-normal'>
                  <span className='w-10 h-1 bg-orange' />
                  Business Consultant
                </span>
                Boost productivity with mind-power techniques
              </h1>
              <p className='my-10'>
                Hire a consultant to unlock your business potential, with
                insights, tailored solutions, and continuous growth. Consult
                today.
              </p>
              <div className='flex gap-4 lg:gap-8 flex-wrap lg:flex-nowrap'>
                <button className='bg-orange border border-orange text-white px-8 py-3 rounded-full font-bold w-full lg:w-auto hover:bg-transparent hover:border-white transition-all duration-200 shadow-md hover:scale-105'>
                  HIRE US
                </button>
                <button className='border border-white text-white px-8 py-3 rounded-full font-bold w-full lg:w-auto hover:bg-orange hover:border-orange transition-all duration-200 shadow-md hover:scale-105'>
                  CONTACT US
                </button>
              </div>
            </div>
            {/* <div className='md:w-1/2'>
              <div className='bg-gray-300 w-full h-64 md:h-96'></div>
            </div> */}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className='py-20'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>Services</h2>
            <p className='text-center text-gray-600 mb-12 max-w-64 mx-auto md:max-w-xl'>
              We offer customized solutions to satisfy individuals and
              businesses, including financial services and branding. Our expert
              team ensures excellent customer satisfaction.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                "Marketing Consultancy",
                "Business Development",
                "HR Consultancy",
                "Financial Advisory",
                "Start-up Support",
                "Customer Services Enhancement",
              ].map((service, index) => (
                <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                  <div className='w-12 h-12 rounded-full mb-4 flex items-center justify-center'>
                    <HandCoins className='text-blue-dark' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-blue-dark '>
                    {service}
                  </h3>
                  <p className='text-gray-600'>
                    A brief description of the {service.toLowerCase()} service
                    goes here.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className='bg-[#3B82F6] py-20 text-white'>
          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h2 className='text-3xl font-bold mb-4'>
                <span className='flex justify-start items-center gap-4 mb-4 text-sm font-normal'>
                  <span className='w-10 h-1 bg-orange' />
                  Know Who We Are
                </span>
                About our company
              </h2>
              <p className='mb-4'>
                We are group of Corporate Executives with specialization in
                Marketing, Business Development, Demand Generation, Customer
                Services, HR and Finance.
              </p>
              <p>
                We offer consultancy services to Mid size organizations and
                startups who are looking to get experienced hands in enhancing
                their business and/or solve their business issues.
              </p>
            </div>
            <div className='md:w-1/2'>
              <div className='bg-[url(/team.jpg)] w-full aspect-video bg-no-repeat bg-cover bg-center' />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className='py-20'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Team</h2>
            <p className='text-center text-gray-600 mb-12'>
              Meet our creative team
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                "Harrison",
                "Elizabeth Sofia",
                "Charlie Cooper",
                "Lucy Evelyn",
              ].map((member, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md text-center'>
                  <div className='bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4' />
                  <h3 className='text-xl font-semibold mb-2'>{member}</h3>
                  <p className='text-gray-600 mb-4'>WordPress Dev.</p>
                  <p className='text-gray-500 text-sm'>
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className='bg-gray-100 py-20'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              Request a Call Back?
            </h2>
            <p className='text-center text-gray-600 mb-12 max-w-64 mx-auto md:max-w-xl'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
            <div className='flex flex-col md:flex-row justify-center'>
              <div className='md:w-4/12 mb-8 md:mb-0'>
                <div className='bg-[url(/contact.jpg)] w-full aspect-square bg-no-repeat bg-center bg-cover' />
              </div>
              <div className='md:w-1/2 md:pl-8'>
                <form>
                  <div className='mb-4'>
                    <label className='font-bold mb-2 block'>Name</label>
                    <input type='text' className='w-full p-2 border rounded focus:outline-none' />
                  </div>
                  <div className='mb-4'>
                    <label className='font-bold mb-2 block'>Email</label>
                    <input type='email' className='w-full p-2 border rounded focus:outline-none' />
                  </div>
                  <div className='mb-4'>
                    <label className='font-bold mb-2 block'>
                      Contact Number
                    </label>
                    <input type='tel' className='w-full p-2 border rounded focus:outline-none' />
                  </div>
                  <div className='mb-4'>
                    <label className='font-bold mb-2 block'>
                      Enquiry or Message
                    </label>
                    <textarea className='w-full p-2 border rounded resize-none focus:outline-none' rows={4} />
                  </div>
                  <button
                    type='submit'
                    className='bg-[#3B82F6] text-white px-6 py-2 rounded'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="bg-[url(/numbers.jpg)] py-32 text-white bg-center bg-no-repeat bg-cover bg-fixed relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black/35 before:w-full before:h-full">
          <div className='container mx-auto px-6 relative'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              <div>
                <h3 className='text-3xl font-bold mb-2'>165,489</h3>
                <p>Support Given</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold mb-2'>500+</h3>
                <p>Clients Rating</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold mb-2'>2 M+</h3>
                <p>Money Saved</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold mb-2'>578</h3>
                <p>Awards won</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className='py-20'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              Testimonials
            </h2>
            <p className='text-center text-gray-600 mb-12'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {["Elizabeth Sofia", "Jillian J. Dooley", "Freda B. Walker"].map(
                (name, index) => (
                  <div
                    key={index}
                    className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center mb-4'>
                      <div className='bg-gray-200 w-12 h-12 rounded-full mr-4' />
                      <div>
                        <h3 className='font-semibold'>{name}</h3>
                        <p className='text-gray-600 text-sm'>CEO</p>
                      </div>
                    </div>
                    <p className='text-gray-600'>
                      Behind the word mountains, far from the countries Vokalia
                      and Consonantia, there live the blind texts Separated.
                    </p>
                    <div className='flex text-yellow-400 mt-4'>
                      {"★".repeat(5)}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className='bg-gray-100 py-20'>
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>Latest News</h2>
            <p className='text-center text-gray-600 mb-12'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                "Solving Business Challenges: Consulting Solutions for Mid-Size Organizations and Startups",
                "Unlocking Growth Potential: Consultancy Strategies for Startups and Mid-Sized Companies",
                "Boost Your Business: How Marketing Experts Can Drive Success for Mid-Size Organizations",
              ].map((title, index) => (
                <div
                  key={index}
                  className='bg-[#3B82F6] rounded-lg overflow-hidden'>
                  <div className='bg-gray-300 h-48' />
                  <div className='p-6'>
                    <h3 className='text-white font-semibold mb-4'>{title}</h3>
                    <button className='bg-white text-[#3B82F6] px-4 py-2 rounded'>
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className='py-12'>
          <div className='container mx-auto px-6'>
            <div className='flex justify-between items-center flex-wrap gap-2'>
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className='bg-gray-200 w-[calc(50%-0.25rem)] lg:w-1/5 h-28 ' />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-[#1E3A8A] text-white pt-12 overflow-hidden'>
          <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>Spectamind</h3>
                <p className='mb-4'>
                  We are group of Corporate Executives with specialization in
                  Marketing, Business Development, Demand Generation, Customer
                  Services, HR and Finance.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-4'>Useful Links</h4>
                <ul className='space-y-2'>
                  <li>
                    <a href='#' className='hover:text-gray-300'>
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-gray-300'>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-gray-300'>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-4'>Subscribe Now</h4>
                <p className='mb-4'>
                  Don&apos;t miss our future updates! Get Subscribed Today!
                </p>
                <form className='flex'>
                  <input
                    type='email'
                    placeholder='Your email here'
                    className='flex-grow p-2 rounded-l'
                  />
                  <button
                    type='submit'
                    className='bg-[#F97316] text-white px-4 py-2 rounded-r'>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className='mt-8 p-12 flex flex-col md:flex-row justify-between items-center relative before:content-[""] before:absolute before:top-0 before:left-2/4 before:h-full before:w-screen before:-translate-x-2/4 before:bg-[#32174D]'>
              <p className="relative">&copy;2023 O&apos;Farrell. All Rights Reserved.</p>
              <div className='flex relative space-x-4 mt-4 md:mt-0'>
                <a href='#' className='hover:text-gray-300'>
                  <Facebook size={20} />
                </a>
                <a href='#' className='hover:text-gray-300'>
                  <Twitter size={20} />
                </a>
                <a href='#' className='hover:text-gray-300'>
                  <LinkedinIcon size={20} />
                </a>
                <a href='#' className='hover:text-gray-300'>
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <div className="mt-8 pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
            <p>&copy;2023 Spectamind. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter */}
    </main>
  );
}
