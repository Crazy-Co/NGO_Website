import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './mychart.css'



ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function MyChart(props) {
    // let chartInstance = null;

    // const pieOptions = {
    //     legend: {
    //         display: false,
    //         position: "right",
    //         legendCallback: function (chart) {
    //             // Return the HTML string here.
    //             console.log(chart);
    //             return [
    //                 <ul>
    //                     <li>z</li>
    //                     <li>zzzz</li>
    //                     <li>ppp</li>
    //                     <li>adasda</li>
    //                 </ul>
    //             ];
    //         }
    //     },
    //     elements: {
    //         arc: {
    //             borderWidth: 0
    //         }
    //     }
    // };

    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["a", "b", "c", "d"],
        datasets: [
            {
                data: [40, 30, 20, 10],
                backgroundColor: ['red', 'blue', 'yellow', 'green'],
                borderColor: ['red', 'blue', 'yellow', 'green'],
                // hoverBackgroundColor: 'blue',
                label: 'Poll',
            }
        ]
    };

    // const pieData = {
    //     maintainAspectRatio: false,
    //     responsive: false,
    //     labels: ["usa", "europe", "africa"],
    //     datasets: [
    //         {
    //             data: [200, 150, 20, 10],
    //             backgroundColor: 'green',
    //             hoverBackgroundColor: 'yellow'
    //         }
    //     ]
    // };

    const options = {
        legend: {
            display: false,
            position: "bottom",
        },
        elements: {
            arc: {
                borderWidth: 5,
            }
        }
    }
    return (
        <div className='mychart' style={{ width: '50vh', height: '50vh' }}>
            <Doughnut
                data={data}
                options={options}
            ></Doughnut>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
        </div>
    )
}