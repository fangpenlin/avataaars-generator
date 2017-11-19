import * as React from 'react'
import { uniqueId } from 'lodash'

export default class ShortHairShaggy extends React.Component {
  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')

  render () {
    const { filter1, mask1, mask2, mask3, path1, path2, path3 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path2} x='0' y='0' width='264' height='280' />
          <path
            d='M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z'
            id={path3}
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z'
            id={path1}
          />
        </defs>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Shaggy' mask={`url(#${mask2})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Facial-Hair/Beard-Medium'
              stroke='none'
              fill='none'
              transform='translate(49.000000, 72.000000)'>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path3} />
              </mask>
              <use
                id='Beardness'
                fill='#252E32'
                fillRule='evenodd'
                xlinkHref={'#' + path3}
              />
              <g
                id='Color/Hair/Brown'
                mask={`url(#${mask3})`}
                fillRule='evenodd'
                fill='#724133'>
                <rect id='Color' x='0' y='0' width='168' height='152' />
              </g>
            </g>
            {this.props.children}
            <mask id={mask1} fill='white'>
              <use xlinkHref={'#' + path1} />
            </mask>
            <use
              id='Shaggy-Hair'
              stroke='none'
              fill='#28354B'
              fillRule='evenodd'
              transform='translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) '
              xlinkHref={'#' + path1}
            />
            <g
              id='Color/Hair/Brown'
              stroke='none'
              fill='none'
              mask={`url(#${mask1})`}
              fillRule='evenodd'>
              <g
                transform='translate(1.000000, 0.000000)'
                id='Color'
                fill='#724133'>
                <rect x='0' y='0' width='264' height='280' />
              </g>
            </g>
          </g>
        </g>
      </g>
    )
  }
}