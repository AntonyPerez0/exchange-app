import React, { useState, useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import 'chartjs-adapter-moment'
import 'chartjs-plugin-datalabels'

function HistoricalChart({ baseCurrency, targetCurrency }) {
  const [historicalData, setHistoricalData] = useState([])
  const chartRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.frankfurter.app/2019-01-01..2019-01-30?from=${baseCurrency}&to=${targetCurrency}`,
        )
        setHistoricalData(response.data.rates)
      } catch (error) {
        console.error('Error fetching historical data', error)
      }
    }

    fetchData()
  }, [baseCurrency, targetCurrency])

  useEffect(() => {
    return () => {
      console.log('Cleaning up chart reference...')
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  const chartLabels = Object.keys(historicalData)
  const chartData = Object.values(historicalData).map(
    (rate) => rate[targetCurrency],
  )

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: `${baseCurrency} to ${targetCurrency}`,
        data: chartData,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  }

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'YYYY-MM-DD',
          tooltipFormat: 'll',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: `${baseCurrency} to ${targetCurrency}`,
        },
      },
    },
  }

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  )
}

export default HistoricalChart
