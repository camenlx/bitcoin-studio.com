import * as React from 'react'
import {Document, Page, pdfjs} from 'react-pdf'

class Resources extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }

    pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // This binding is necessary to make `this` work in the callback
    //this.activateLasers = this.activateLasers.bind(this)
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <div id="resourcesPage">
        <div className={'hero'} id={'hero-resourcesPage'}>
          <h1>Resources</h1>
          <p>
            At Bitcoin Studio we are dedicated to move the Bitcoin tech community forward. This is why we put at your
            disposal various free educational works.
            The presentations made by Stéphane Roche are exploring numerous aspects of the Bitcoin protocol like
            cryptographic keys, HD wallet, consensus, mining, forks, transactions (legacy and Segwit format), etc.
          </p>
        </div>

        <section id={'resourcesPage-BitcoinJSGuide'}>
          <div className="hr"><hr/></div>
          <h2>Bitcoin Programming with BitcoinJS</h2>
          <p>
            If you are interested learning Bitcoin programming with Javascript, you should definitely check out the
            open-source guide we wrote on BitcoinJS. We present how to do all the various types of transaction, and is
            sufficiently detailed to be accessible to new developers. <br/>
            <a href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS" target={"_blank"}>➱ Bitcoin Programming with BitcoinJS</a>
          </p>
        </section>

        <section id={'slides-resourcesPage'}>
          <div className="hr"><hr/></div>
          <h2>BITCOIN TRAININGS SLIDES</h2>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_forks_history_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_forks_history_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Mining_consensus_forks_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Mining_consensus_forks_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_transaction_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Bitcoin_transaction_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_Script_Stephane_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_Script_Stephane_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf" download>DOWNLOAD</a>
            </div>
          </div>

          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <div className="slideButton">
              <a>DOWNLOAD</a>
            </div>
          </div>


          <object className={'slideItem'} type={'application/pdf'}
                  data="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"></object>

          {/*<Document
            file="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
          </Document>*/}

          <Document
            file={"workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={this.previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={this.nextPage}
            >
              Next
            </button>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <p className={"slidesDesc"}>
            You can download all the presentations <a href="workshopSlides/Bitcoin_Training_Roche.zip" download>here</a>.
          </p>
        </section>
      </div>
    )
  }
}

export default Resources