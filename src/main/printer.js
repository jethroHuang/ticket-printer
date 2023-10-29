import { Printer, Image } from "@node-escpos/core";
// install escpos-usb adapter module manually
import USB from "@node-escpos/usb-adapter";
// Select the adapter based on your printer type

export function printTest() {
  const device = new USB();
  let prints = USB.findPrinter()
  console.log(prints[0].configDescriptor.interfaces)

  device.open(function(err){
    if(err){
      // handle error
      console.error(err);
      return
    }
    // encoding is optional
    const options = { encoding: "GB18030" /* default */ }
    let printer = new Printer(device, options);

    printer
      .text("May the gold fill your pocket")
      .text("恭喜发财")
      .barcode(112233445566, "EAN13", { width: 50, height: 50 })
      .cut()
      .close()
    // let buffer = new Buffer()
    // printer.raw(buffer)
  });
}
