import React from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const SidebarData = [
    {
        tittle: 'Inicio',
        path: '/inicio',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Presupuesto',
        path: '/presupuesto',
        icon: <PlayArrowRoundedIcon />,
        subNav: [
            {
                tittle: 'Contrataciones',
                path: '/presupuesto/contrataciones'
            },
            {
                tittle: 'Formulación presupuestaria',
                path: '/presupuesto/formulacionpresupuestaria'
            },
            {
                tittle: 'Modificacion presupuestaria',
                path: '/presupuesto/modificacionpresupuestaria'
            },
            {
                tittle: 'Programación física',
                path: 'programacionfisica'
            },
            {
                tittle: 'Reportes',
                path: '/presupuesto/reportes'
            }
        ]
    },
    {
        tittle: 'CAS',
        path: '/cas',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Planificación',
        path: '/planificación',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Contrataciones',
        path: '/contrataciones',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Portal',
        path: '/portal',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Contabilidad',
        path: '/contabilidad',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Tesorería',
        path: '/tesoreria',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Bienes Físicos',
        path: '/bienesfisicos',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Inversíon Pública',
        path: '/inversionpublica',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Credito Público',
        path: '/creditopublico',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Ingresos Públicos',
        path: '/ingresospublicos',
        icon: <PlayArrowRoundedIcon />
    },
    {
        tittle: 'Recursos Humanos',
        path: '/recursoshumanos',
        icon: <PlayArrowRoundedIcon />
    },

]