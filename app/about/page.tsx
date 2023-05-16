import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <main className="flex min-h-screen flex-col justify-between items-center bg-[url('/bg.png')] bg-no-repeat bg-cover bg-fixed w-screen">
            <div className="w-full flex flex-col items-center mb-10">
                <Navbar />
                <div className='flex flex-col items-center justify-center py-6 w-full sm:px-6 lg:px-8'>
                    <div className="lg:my-10 my-2 sm:mx-auto sm:w-full">
                        <h2 className='text-center text-xl lg:text-5xl text-white font-rose-knight'>
                            About <span className='mr-3'>AMSA</span> National Project
                        </h2>
                    </div>
                    <div className="w-[90%] bg-[#44609C] border-[6px] border-[#6d90db] p-10 rounded-xl font-alegreya text-xl">
                        AMSA National Project adalah program kerja tahunan yang dilaksanakan oleh AMSA-Indonesia. AMSA National Project merupakan puncak dari AMSA District Project yang dilaksanakan oleh keenam distrik di AMSA-Indonesia. Pada tahun ini, AMSA National Project akan membawakan tema “Obstetrics and Gynecology”. Acara ini diharapkan dapat menjadi wadah kolaborasi bagi anggota AMSA-Indonesia dari berbagai universitas untuk bersama-sama memberikan kebermanfaatan bagi masyarakat umum dan berbagai pihak lainnya.
                    </div>
                    <div className="w-[90%] flex mt-20 items-center">
                        <h2 className='text-center text-xl lg:text-5xl text-white font-rose-knight'>
                            This Year Theme
                        </h2>
                        <div className="w-[90%] bg-[#44609C] border-[6px] border-[#6d90db] p-10 rounded-xl font-alegreya text-xl">
                            <h3 className='text-4xl text-center font-rose-knight mb-2'>
                                Obstetrics and Gynecology
                            </h3>
                            <ul className='list-disc'>
                                <li>
                                    Sebagai negara dengan jumlah penduduk terbesar keempat di dunia, Indonesia berada pada urutan keempat dalam peringkat tertinggi angka kelahiran.
                                </li>
                                <li>
                                    Berbagai masalah dan tantangan baru pun senantiasa muncul dalam aspek kesehatan serta praktik kedokteran, khususnya dalam bidang obstetri dan ginekologi.
                                </li>
                                <li>
                                    Salah satu agenda utama SDGs adalah menurunkan angka kematian ibu dan balita.
                                </li>
                                <li>
                                    Angka kematian ibu di Indonesia masih berada di kisaran 305 per 100.000 kelahiran hidup, jauh dari target yang ditentukan, (183 per 100.000 KH di tahun 2024).
                                </li>
                                <li>
                                    Demikian juga bayi dan balita yang masih harus kita selamatkan dari kematian. Target ini dapat dicapai melalui intervensi spesifik yang dilakukan saat dan sebelum kelahiran.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
