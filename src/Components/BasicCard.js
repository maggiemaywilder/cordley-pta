import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'

class BasicCard extends Component {
    // const paypal = <FontAwesomeIcon icon={fapaypal} />
    render() {
        return (
            <Card >
                <Card.Body>
                    <Card.Title className="pb-2"><h2>Donate Now to Help Plant Trees at Cordley Elementary!</h2></Card.Title>
                    <Card.Text>
                    <p>Recently, Cordley Elementary received a donation of two red maple trees to be planted on the playground. These trees will be planted in the next few weeks, in the hopes of adding some much-needed shade to the playground for years to come. </p>

                    <p>The PTA is now raising funds to add more. We’d like to raise approximately $1,200 for two more good-sized trees by November 1, 2021.</p>

                    <p>If you are able and willing to provide financial support, you may donate using the link below—or by dropping off cash or check with the office. If you donate on PayPal or in person, please make sure to include a note that the money is for the Tree Committee.</p> 

                    <p>Please note—any leftover funds may be used by the PTA general fund to help the Cordley Community.</p>

                    <p>Thank you!</p> 

                    <p>Cordley Elementary PTA</p> 
                    <p>Tree Committee &#40;aka “The Shady Subcommittee”&#41;</p>

                    </Card.Text>
                    <hr class="style5"></hr>

                    <Card.Link href="https://www.paypal.com/donate/?business=CCJK78LSBN7QU&amp;no_recurring=0&amp;item_name=Cordley+PTA&amp;currency_code=USD" target="_blank">Cordley PTA PayPal</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BasicCard;