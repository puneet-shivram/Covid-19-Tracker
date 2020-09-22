import React from 'react';
import {
    AreaChart, stop, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, Area, ResponsiveContainer
  } from 'recharts';
  
function Chart({data}){
    return (
        <>
            <ResponsiveContainer  width="100%" aspect={3}>
                <AreaChart  data={data} 
                    margin={{ top: 10, right: 0, left: 20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="red" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis type="number" domain={[0, 6000000]}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="totalconfirmed" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="totalrecovered" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="totaldeceased" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRed)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}
export default Chart;