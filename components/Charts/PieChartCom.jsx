import React from 'react'
import { PieChart, Pie , Cell , Tooltip , Legend , ResponsiveContainer } from 'recharts'
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },

];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
function PieChartCom() {
  
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie data={data} 
            cx="50%" 
            cy="50%" 
            labelLine={false} 
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} 
            outerRadius={80} 
            fill="#8884d8" 
            dataKey="value">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartCom