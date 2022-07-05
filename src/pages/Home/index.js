import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Home (){
    const [countPasien, setCountPasien] = useState(0);
    const [countPemeriksaan, setCountPemeriksaan] = useState(0);

    
    
    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: true,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: 'Statistik Pasien dan Pemeriksaan',
            font: {
                size: 26
            },
          },
          legend: {
            labels: {
                display: false,
                font: {
                    size: 14
                },
                usePointStyle: true,
            }
        }
        },
        scales: {
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Month',
                  color: '#000000',
                  font: {
                    family: 'Times',
                    size: 20,
                    weight: 'normal',
                    lineHeight: 1.2,
                  },
                  padding: {top: 20, left: 0, right: 0, bottom: 0}
                },
                ticks: {
                    font: {
                        size: 14
                    },
                    color: 'rgba(53, 162, 235)'
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Value',
                  color: '#000000',
                  font: {
                    family: 'Times',
                    size: 20,
                    style: 'normal',
                    lineHeight: 1.2
                  },
                  padding: {top: 30, left: 0, right: 0, bottom: 0}
                }
              }
         
        },
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Jumlah Pasien',
            data: [3, 3, 2, 8, 2, 3, 4],
            borderColor: 'rgba(53, 162, 235, 0.5)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Pemeriksaan',
            data: [4, 4, 4, 0, 10, 5, 4],
            borderColor: '#000000',
            backgroundColor: '#000000',
          },
        ],
      };

    return (
        <div className="p-8  ">
            <div className='tex-center items-center mt-4 mb-10'>
                <h1 className='font-bold text-2xl text-info text-center '>Statistik Pasien dan Pemeriksaan</h1>
            </div>
            <div className='flex'>
                <div className='w-8/12'>
                    <Line options={options} data={data} />
                </div>
                <div  className='w-4/12 p-8 '>
                    <div className='rounded-md border-2 border-info'>
                        <div className='bg-info text-center h-10 items-center align-middle  flex justify-center'>
                            <h2 className='font-bold text-xl text-white '>INFORMASI</h2>
                        </div>
                        <div className='text-center h-10 items-center align-middle  flex justify-center border-b-2 border-info'>
                            <h2 className='font-bold text-md '>{`Pasien Hari Ini : ${countPasien}`}</h2>
                        </div>
                        <div className='text-center h-10 items-center align-middle  flex justify-center'>
                            <h2 className='font-bold text-md '>{`Pemeriksaan Hari Ini : ${countPemeriksaan}`}</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;