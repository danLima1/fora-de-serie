import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterLegal extends React.Component {
    render() {
        return (
            <ul className="footer-menu  flex-container flex-column">
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/careers"
                    >
                      
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/privacy"
                    >
                      
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/refunds"
                    >
                      
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/terms"
                    >
                       
                    </NavLink>
                </li>

            </ul>
        );
    }
}
