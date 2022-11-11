require "rqrcode"

module Jekyll
    module QRFilter
      def qr(input)
        qrcode = RQRCode::QRCode.new(input + "#qr")

        q = qrcode.as_svg({
            use_path: true,
            xml_decleration: false,
            viewbox: true,
            svg_attributes: {
              class: "qrcode"
            }
        })
        '<svg' + q.split('<svg')[1]
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::QRFilter)