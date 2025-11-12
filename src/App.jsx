import { useState, useEffect } from 'react';

//svg
import SmileCat from './assets/SmileCat.svg?react';
import ThinkerCat from './assets/ThinkerCat.svg?react';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function pegarUrlGato() {
    console.log('1');
    try {
      setIsDisabled(true);
      setIsLoading(true);
      const result = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_tQyUcEJtW1GVRU8xXfD1FJeTwoHpvmfY7c9iT4DYXgDVtUmY7VkJmjiqfbfRqZya'
        }
      });

      const response = await result.json();
      
      if (response?.[0]?.url) {
        setImgUrl(response[0].url);
      } else {
        console.log(response);
        alert('Não foi possível gerar imagem do gatinho :(');
      }
      setIsDisabled(false);
      setIsLoading(false);
    } catch (err) {
      setIsDisabled(false);
      setIsLoading(false);

      console.log(err);
      alert('Ocorreu um erro desconhecido!');
    }
  }

  useEffect(() => {
    pegarUrlGato();
  }, []);

  return (

      <div className="min-h-full bg-[#D15511]" id='containerMax'>
          <header className='w-full bg-white flex flex-row justify-around items-center h-10 fixed top-0 left-0 z-50'>
            <a href='#inicio' className="text-[#D15511] text-[18px]">Eliana | CatSitter</a>
            <nav className='flex flex-row gap-x-8 items-center justify-center'>
              <a href="#gatinhos" className='text-[#D15511] text-[14px]'>Gatinhos</a>
              <a href="#cuidados" className='text-[#D15511] text-[14px]'>Cuidados</a>
            </nav>
          </header>
        <div className='w-full  max-w-[425px] mx-auto pt-[30px] pb-[100px] bg-white rounded-2xl min-h-full' id='container'>
          <main className='w-full h-full mt-20'>
            <section className="flex flex-row justify-center w-full items-center scroll-mt-15" id='inicio'>
              <div className='flex flex-col flex-1 justify-center ml-4 gap-y-4'>
                <h1 className='text-2xl w-full flex-1'>Bem vindo ao cantinho dos miados felizes</h1>
                <a href="wa.me/5581084216699" className="bg-[#FBFF29] rounded-[5px] px-2 max-w-fit py-1">Vamos Conversar!</a>
              </div>
              <SmileCat className='flex-1' />
            </section>
            <section className="flex flex-row justify-center w-full pt-20 items-center">
              <ThinkerCat className='ml-2' />
              <div className="flex flex-col flex-1 justify-center mr-4 items-center gap-y-4">
                <h1 className='text-2xl w-full text-right'>Prazer, <span className='text-[#D15511]'>Eliana!</span></h1>
                <p className='text-right text-[12px]'>Sou a Eliana, apaixonada por gatos desde que me entendo por gente. 💗 Já cuidei, resgatei e acompanhei muitos bichinhos — cada um com seu jeitinho especial. Hoje transformei esse amor em profissão, oferecendo cuidados com carinho, confiança e alegria. 🐾</p>
              </div>
            </section>
            <section className='w-full text-center pt-20 flex flex-col items-center gap-y-4'>
              <h1 className='text-4xl text-[#D15511]'>Momentos</h1>
              <div className='w-full max-h-400px'>
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image2.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image3.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
            <section className='pt-20 flex flex-col gap-y-4 items-center' id='cuidados'>
              <h1 className='text-2xl text-center'>Cuidados com os <span className='text-[#D15511]'>Gatinhos</span></h1>
              <div className='w-11/12 grid grid-cols-2 items-stretch justify-center gap-2'>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2 justify-between'>
                  <h3 className='text-[14px] text-white'>Água Fresquinha</h3>
                  <p className='text-[12px] text-white'>Tigelas sempre limpas e cheias pra manter a hidratação.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Carinho e Atenção</h3>
                  <p className='text-[12px] text-white'>Brincadeiras e afeto pra reduzir o estresse e garantir bem-estar.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Caixa de Areia</h3>
                  <p className='text-[12px] text-white'>Limpeza diária e observação de hábitos do gatinho.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'> Segurança</h3>
                  <p className='text-[12px] text-white'>Portas e janelas protegidas pra evitar fugas e acidentes.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Saúde</h3>
                  <p className='text-[12px] text-white'>Atenção a qualquer mudança de comportamento ou apetite.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Conforto e Rotina</h3>
                  <p className='text-[12px] text-white'>Tudo no jeitinho que o gato já conhece — conforto é prioridade.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Comunicação</h3>
                  <p className='text-[12px] text-white'>Atualizações, fotos e vídeos pra manter o tutor tranquilo.</p>
                </div>
                <div className='bg-[#D15511] rounded-[15px] p-4 text-center flex flex-col gap-y-2'>
                  <h3 className='text-[14px] text-white'>Adaptação</h3>
                  <p className='text-[12px] text-white'>Respeito ao tempo e ao espaço do gatinho até ele se sentir seguro.</p>
                </div>
              </div>
            </section>
            <section className='pt-20 flex flex-col gap-y-4 items-center'>
              <h1 className='text-2xl text-center'>Feedbacks</h1>
              <div className='w-full max-h-400px'>
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image2.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                  <SwiperSlide className='flex justify-center items-center'>
                    <img src="/image3.png" alt="gato" className="max-h-[400px] ml-auto mr-auto object-contain rounded-xl" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
            <section className='pt-20 flex flex-col gap-y-4 items-center' id='gatinhos'>
              <h1 className='text-2xl text-center text-[#D15511]'>Gatinhos</h1>
              {imgUrl !== '' ?
                isLoading ?
                  (<p>Carregando</p>) :
                  (<div className='flex flex-col items-center gap-y-4'>
                    <img src={imgUrl} alt="gatos"  className='max-h-[400px] ml-auto mr-auto object-contain rounded-xl'/>
                    <button className='bg-[#FBFF29] rounded-[5px] px-2 max-w-fit py-1 cursor-pointer'
                      onClick={() => {
                        pegarUrlGato()
                      }}
                      disabled={isDisabled}
                    >Mais Gatinhos, por favor!</button>
                  </div>)
                :
                (<p>Não foi possível gerar imagem</p>)
              }
            </section>
          </main>
        </div>
      </div>
  )
}
export default App;