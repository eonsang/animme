import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Oil on canvas', 'Watercolor', 'Others'],
  datasets: [
    {
      data: [75, 9, 16],
      backgroundColor: [
        '#0C435B',
        '#D9AF89',
        '#B3796B',
      ],
      borderWidth: 0,
    },
  ],
}

const DistributionTurnoverChart = () => (
  <Doughnut data={data} />
)

export default DistributionTurnoverChart
