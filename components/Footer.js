const copyrightString = `© ${(new Date()).getFullYear()} Robert Ngethe`

const Footer = () => (
    <footer className="page-footer font-small fixed-bottom">
        <div className="footer-copyright text-center py-3">
            {copyrightString}
        </div>
    </footer>
);

export default Footer;