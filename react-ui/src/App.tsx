import * as React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

/**
 * Shell
 */
class App extends React.Component {
  render() {
    return (
      <div className={'wrapper'}>
        <Header/>

        <Main/>

        <Footer/>

        <div id={'copyrights'}>
          <div className="strike"></div>
          <p>Bitcoin Studio - 2019</p>
          <p>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a
            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
            href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0
            BY</a></p>
        </div>
      </div>
    )
  }
}

export default App