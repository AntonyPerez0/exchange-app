import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import './CurrencyConverter.css'

function LineChart({ baseCurrency, selectedCurrency }) {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({ labels: [], data: [] })
  const chartInstance = useRef(null)

  useEffect(() => {
    if (baseCurrency !== selectedCurrency) {
      fetch(
        `https://api.frankfurter.app/2020-01-01..2022-01-01?from=${baseCurrency}&to=${selectedCurrency}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.rates) {
            const chartLabels = Object.keys(data.rates)
            const chartData = Object.values(data.rates).map(
              (rate) => rate[selectedCurrency],
            )
            setChartData({ labels: chartLabels, data: chartData })
          }
        })
        .catch((error) => console.error(error))
    }
  }, [baseCurrency, selectedCurrency])

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: `${baseCurrency} to ${selectedCurrency}`,
              data: chartData.data,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          title: {
            display: true,
            text: `Exchange Rate: ${baseCurrency} to ${selectedCurrency}`,
          },
        },
      })
    }
  }, [chartData, baseCurrency, selectedCurrency])

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  )
}

export default LineChart
