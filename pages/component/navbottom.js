import React from "react";
import Head from "next/head";
import Link from "next/link";
function NavBottom() {
  return (
        <section className="section-4 bg-white">
            <footer className="footer fixed-bottom bg-white">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column py-3">
                                <Link href="/" className="nav-link">
                                <div className="text-center mb-2">
                                  <span className="fa fa-home fa-lg"></span>
                                </div>
                                <span className="font-dark">
                                    Home
                                </span>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column pt-0 pb-0">
                                <Link href="/attend" className="nav-link">
                                <div className="text-center mb-2">
                                  <span className="fa-lg fa fa-clipboard-user"></span>
                                </div>
                                <span className="font-dark">
                                    Attend
                                </span>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column pt-0 pb-0">
                                <Link href="/mypoint" className="nav-link">
                                <div className="text-center mb-2">
                                  <span className="fa-lg fas fa-coins"></span>
                                </div>
                                <span className="font-dark">
                                    Point
                                </span>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column pt-0 pb-0">
                                <Link href="/score" className="nav-link">
                                <div className="text-center mb-2">
                                  <span className="fa-lg fa fa-star"></span>
                                </div>
                                <span className="font-dark">
                                    Score
                                </span>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column pt-0 pb-0">
                                <Link href="/payment" className="nav-link">
                                <div className="text-center mb-2">
                                  <span className="fa-lg fa fa-cart-shopping fa-lg"></span>
                                </div>
                                <span className="font-dark">
                                    Payment
                                </span>
                                </Link>

                            </div>
                        </div>

                      </div>
                </div>
            </footer>
        </section>
  );
}

export default NavBottom;
