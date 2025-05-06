import { ReactNode, useState } from "react"
import { IconMdi } from "../icon/IconMdi"



export const Popover = (
    {
        header,
        children
    }: {
        header?: string,
        children?: ReactNode
    }
) => {

    const [show, setShow] = useState(false)

    const toggleShow = () => setShow(!show)


    return (
        <button className="btn btn-link bth-sm" style={{ width: 24, height: 24, padding: 0, position: "relative" }}
            onClick={toggleShow}>
            <IconMdi iname="information-outline" />
            {show &&
                <div className="popover fade bs-popover-right show"
                    style={{
                        minWidth: 200,
                        position: "absolute", top: 24, left: "10%",
                        transform: "translate(-10%, 0%)",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    }}>
                    <div className="arrow text-muted"
                        style={{ position: "absolute", top: -13, left: "10%" }}>
                        <IconMdi iname="menu-up" />
                    </div>
                    <h3 className="popover-header">
                        {header}

                        <button type="button" className="btn-close"
                            data-bs-dismiss="modal" aria-label="Close"
                            style={{
                                position: "absolute",
                                right: 5,
                                top: 5,
                                fontSize: 10
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                                toggleShow()
                            }}></button>
                    </h3>
                    <div className="popover-body">
                        {children}
                    </div>
                </div>
            }
        </button>
    )
}