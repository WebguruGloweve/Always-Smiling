//
//  ViewController.m
//  Extension Test
//
//  Created by MyMac on 12/19/18.
//  Copyright © 2018 MyMac. All rights reserved.
//

#import "ViewController.h"
#import <SafariServices/SFSafariApplication.h>
@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    //[[btn_open cell] setBackgroundColor:[NSColor redColor]];
//    btn_open.wantsLayer = true;
//    btn_open.layer.backgroundColor = [NSColor colorWithRed:60.f / 255.f green:60.f / 255.f blue:60.f / 255.f alpha:0.5f].CGColor;
//    btn_open.layer.masksToBounds = false;
//    btn_open.layer.cornerRadius = 3;
//    
//    NSColor *color = [NSColor whiteColor];
//    NSMutableAttributedString *colorTitle = [[NSMutableAttributedString alloc] initWithAttributedString:[btn_open attributedTitle]];
//    NSRange titleRange = NSMakeRange(0, [colorTitle length]);
//    [colorTitle addAttribute:NSForegroundColorAttributeName value:color range:titleRange];
//    [btn_open setAttributedTitle:colorTitle];
    NSColor *color = [NSColor darkGrayColor];
    NSMutableAttributedString *colorTitle = [[NSMutableAttributedString alloc] initWithAttributedString:[btn_open attributedTitle]];
    NSRange titleRange = NSMakeRange(0, [colorTitle length]);
    [colorTitle addAttribute:NSForegroundColorAttributeName value:color range:titleRange];
    [btn_open setAttributedTitle:colorTitle];
    // Do any additional setup after loading the view.
}


- (void)setRepresentedObject:(id)representedObject {
    [super setRepresentedObject:representedObject];

    // Update the view, if already loaded.
}

- (IBAction) onOpenPreference : (id)sender {
    [SFSafariApplication showPreferencesForExtensionWithIdentifier:@"lexy.Extension-Test.extension-test1" completionHandler:^(NSError * _Nullable error) {
        if (error) {
            // Insert code to inform the user something went wrong.
            NSLog(@"%@",error);
        }
        else {
            [NSApp terminate:self];
        }
    }];
}


@end
