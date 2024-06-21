import { Col, Container, Image, Row } from "react-bootstrap"
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs"
import liquidity from "../assets/liquidity.png"
import swap from "../assets/swap.png"
import { Link } from "react-router-dom"


const Features = () => {
  return (
    <section className="py-2">
      <Container className="border-lemon rounded-4 py-2">
        <p className=" fs-4 text-uppercase text-lemon font-supadao"> Features <BsArrowRight className="text-purple-300 d-inline-block fs-5 fw-bold" /></p>

        <Row className="pb-5">
          <p className=" fs-5 text-uppercase text-lemon font-supadao d-md-none">Liquidity pool & Token swap</p>
          <Col xs={12} md={6} lg={8}>
            <Image fluid src={liquidity} />
          </Col>
          <Col xs={12} md={6} lg={4} className="d-flex flex-column my-auto">
            <p className=" fs-6 text-uppercase text-lemon font-supadao d-none d-md-block">Liquidity pool & Token swap</p>
            <p className="d-none d-md-block">
              SupaDao enables users to provide liquidity to trading pairs by depositing their tokens into liquidity pools.
            </p>
            <Link to="/liquidity" className="btn-custom btn text-capitalize align-self-start my-3">
              liquidity pool
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
            <Link to="/swap" className="btn-custom btn text-capitalize align-self-start">
              Token Swap
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
          </Col>
        </Row>

        <Row className="py-5">
          <p className=" fs-5 text-uppercase text-lemon font-supadao d-md-none">NFT Marketplace</p>
          <Col xs={12} md={6} lg={4} className="d-flex flex-column my-auto">
            <p className=" fs-6 text-uppercase text-lemon font-supadao d-none d-md-block">Nft Marketplace</p>
            <p className="d-none d-md-block">
              SupaDao enables users to provide liquidity to trading pairs by depositing their tokens into liquidity pools.
            </p>
            <Link to="/liquidity" className="btn-custom btn text-capitalize align-self-start">
              NFT Market place
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={8}>
            <Image fluid src={swap} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features