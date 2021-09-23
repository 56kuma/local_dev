import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

// FontAwesomeのcssを先読み
import "@fortawesome/fontawesome-svg-core/styles.css"

// fontawesomeのコンポーネント内で、cssを適用しないようにする設定
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ( {children} ) => (
    <div>
        <Header />

        { children }

        <Footer />
    </div>
)